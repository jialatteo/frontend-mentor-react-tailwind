"use client";
import { Rubik } from "next/font/google";
import { useState, useEffect } from "react";
import SelfComment from "./SelfComment";
import OtherComment from "./OtherComment";

const rubik = Rubik({
  weight: ["400", "500", "700"],
});

export default function InteractiveCommentsSection() {
  const users = [
    {
      username: "juliusomo",
      image: "interactive-comments-section/avatars/image-juliusomo.png",
    },
    {
      username: "amyrobson",
      image: "interactive-comments-section/avatars/image-amyrobson.png",
    },
    {
      username: "maxblagun",
      image: "interactive-comments-section/avatars/image-maxblagun.png",
    },
    {
      username: "ramsesmiron",
      image: "interactive-comments-section/avatars/image-ramsesmiron.png",
    },
  ];

  const [currentUsername, setCurrentUsername] = useState(users[0].username);
  const [currentUserImage, setCurrentUserImage] = useState(users[0].image);
  const [topLevelComments, setTopLevelComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");

  const deleteCommentId = (commentId) =>
    setTopLevelComments(
      topLevelComments.filter((comment) => comment.id !== commentId),
    );

  const editCommentId = (commentId, updatedContent) =>
    setTopLevelComments((prevTopLevelComments) =>
      prevTopLevelComments.map((comment) => {
        if (comment.id !== commentId) {
          return comment;
        }

        return { ...comment, content: updatedContent };
      }),
    );

  const postComment = (content, username) => {
    const payload = {
      content,
      username,
    };

    fetch(`http://localhost:5000/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post reply");
        }

        return response.json();
      })
      .then((responseJson) => {
        setTopLevelComments((prevTopLevelComments) => [
          ...prevTopLevelComments,
          responseJson,
        ]);
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  const resetDatabase = () => {
    fetch("http://localhost:5000/comments/reset", {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post reply");
        }
        return response.json();
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error resetting datatbase:", error);
      });
  };

  const handleUserChange = (e) => {
    const selectedUsername = e.target.value;
    setCurrentUsername(selectedUsername);

    const selectedUser = users.find(
      (user) => user.username === selectedUsername,
    );
    setCurrentUserImage(selectedUser.image);
  };

  useEffect(() => {
    fetch("http://localhost:5000/top-level-comments")
      .then((response) => response.json())
      .then((data) => setTopLevelComments(data));
  }, []);

  return (
    <div
      className={`flex min-h-screen flex-col items-center gap-3 bg-interactive-comments-section-very-light-gray px-4 py-8 ${rubik.className}`}
    >
      <button
        className="rounded-lg bg-interactive-comments-section-moderate-blue p-4 text-white hover:opacity-50"
        onClick={() => resetDatabase()}
      >
        Reset to initial database
      </button>
      <div className="flex items-center gap-2">
        <p>Logged in as:</p>
        <select
          value={currentUsername}
          onChange={handleUserChange}
          className="rounded-md border p-2"
        >
          {users.map((user) => (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>
      </div>

      {topLevelComments?.map((comment) =>
        currentUsername === comment?.username ? (
          <SelfComment
            deleteCommentId={deleteCommentId}
            editCommentId={editCommentId}
            currentUsername={currentUsername}
            comment={comment}
          />
        ) : (
          <OtherComment
            deleteCommentId={deleteCommentId}
            editCommentId={editCommentId}
            currentUsername={currentUsername}
            comment={comment}
          />
        ),
      )}
      <div className="w-full max-w-[1600px] rounded-lg bg-white p-4">
        <textarea
          value={commentContent}
          className="mb-2 h-28 w-full rounded-lg border border-interactive-comments-section-light-gray px-4 py-2 focus:outline-interactive-comments-section-moderate-blue"
          name="Comment"
          placeholder="Add a comment..."
          onChange={(e) => setCommentContent(e.target.value)}
        ></textarea>
        <div className="flex items-center justify-between">
          <img
            className="w-10"
            src={currentUserImage}
            alt="current-user-image"
          />
          <button
            onClick={() => {
              postComment(commentContent, currentUsername);
              setCommentContent("");
            }}
            className="rounded-md bg-interactive-comments-section-moderate-blue px-8 py-3 hover:opacity-50"
          >
            <p className="font-medium text-white group-hover:opacity-50">
              SEND
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
