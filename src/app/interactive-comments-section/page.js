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

  useEffect(() => {
    fetch(`http://localhost:5000/top-level-comments/${currentUsername}`)
      .then((response) => response.json())
      .then((data) => setTopLevelComments(data));
  }, []);

  const deleteComment = (commentId) => {
    fetch(`http://localhost:5000/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.error);
          });
        }
        setTopLevelComments(
          topLevelComments.filter((comment) => comment.id !== commentId),
        );
        return response.json();
      })
      .catch((error) => {
        console.error("Failed to delete comment:", error);
        alert("Error deleting comment: " + error.message);
      });
  };

  const editCommentContent = (commentId, updatedContent) =>
    fetch(`http://localhost:5000/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: updatedContent,
        username: currentUsername,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.error);
          });
        }
        setTopLevelComments((prevTopLevelComments) =>
          prevTopLevelComments.map((comment) =>
            comment.id === commentId
              ? {
                  ...comment,
                  content: updatedContent,
                }
              : comment,
          ),
        );
      })
      .catch((error) => {
        console.error;
      });

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

  const voteComment = (commentId, currentUsername, voteValue) => {
    const payload = {
      commentId,
      currentUsername,
      voteValue,
    };

    fetch(`http://localhost:5000/votes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to upvote");
        }
        return response.json();
      })
      .then((reponseJson) => {
        setTopLevelComments((prevTopLevelComments) =>
          prevTopLevelComments.map((comment) => {
            if (comment.id === commentId) {
              console.log(
                "current_user_vote_value",
                comment.current_user_vote_value,
              );
              return {
                ...comment,
                score:
                  comment.score - comment.current_user_vote_value + voteValue,
                current_user_vote_value: voteValue,
              };
            } else {
              return comment;
            }
          }),
        );
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
          className="cursor-pointer rounded-md border bg-interactive-comments-section-moderate-blue p-2 text-white hover:opacity-50"
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
            deleteComment={deleteComment}
            editCommentContent={editCommentContent}
            voteComment={voteComment}
            currentUsername={currentUsername}
            comment={comment}
          />
        ) : (
          <OtherComment
            currentUsername={currentUsername}
            voteComment={voteComment}
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
