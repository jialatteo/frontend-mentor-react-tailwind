import { useEffect, useState } from "react";
import SelfComment from "./SelfComment";
import { getTimeAgoString } from "./helper";

export default function OtherComment({
  currentUsername,
  voteComment,
  comment,
}) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/replies/${comment?.id}/${currentUsername}`)
      .then((response) => response.json())
      .then((data) => setReplies(data));
  }, []);

  const voteReply = (commentId, currentUsername, voteValue) => {
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
        setReplies((prevReplies) =>
          prevReplies.map((reply) => {
            if (reply.id === commentId) {
              return {
                ...reply,
                score:
                  comment.score - reply.current_user_vote_value + voteValue,
                current_user_vote_value: voteValue,
              };
            } else {
              return reply;
            }
          }),
        );
      });
  };

  const deleteReply = (commentId) => {
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
        setReplies(replies.filter((reply) => reply.id !== commentId));
        return response.json();
      })
      .catch((error) => {
        console.error("Failed to delete comment:", error);
        alert("Error deleting comment: " + error.message);
      });
  };

  const editReplyContent = (commentId, updatedContent) => {
    fetch(`http://localhost:5000/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: updatedContent,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.error);
          });
        }
        setReplies((prevReplies) =>
          prevReplies.map((comment) =>
            comment?.id === commentId
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
  };

  const postReply = (replying_to, content, username) => {
    const payload = {
      content,
      username,
      replying_to,
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
        setReplies((prevReplies) => [...prevReplies, responseJson]);
      })
      .catch((error) => {
        console.error("Error posting reply:", error);
      });
  };

  return (
    <div className="w-full max-w-[1600px]">
      <div className="rounded-lg bg-white p-4">
        <div className="flex">
          <div className="hidden sm:block">
            <div className="mr-4 flex min-w-12 flex-col items-center justify-center gap-4 rounded-md bg-interactive-comments-section-very-light-gray py-4 pb-2 pt-4">
              <button
                onClick={() => {
                  voteComment(comment?.id, currentUsername, 1);
                }}
                className="group"
              >
                {/* prettier-ignore */}
                <svg id="icon-plus" className="group-hover:fill-interactive-comments-section-moderate-blue fill-interactive-comments-section-light-grayish-blue" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
              </button>
              <p className="font-medium text-interactive-comments-section-moderate-blue">
                {comment?.score}
              </p>
              <button
                onClick={() => {
                  voteComment(comment?.id, currentUsername, -1);
                }}
                className="group pb-3"
              >
                {/* prettier-ignore */}
                <svg id="icon-minus" className="group-hover:fill-interactive-comments-section-moderate-blue fill-interactive-comments-section-light-grayish-blue" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/></svg>
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  className="w-10"
                  src={comment?.image_png}
                  alt="user-image"
                />
                <div className="flex items-center gap-2">
                  <p className="font-bold">{comment?.username}</p>
                </div>
                <p className="text-interactive-comments-section-grayish-blue">
                  {getTimeAgoString(comment?.created_at)}
                </p>
              </div>
              <button
                disabled={isReplying}
                onClick={() => setIsReplying(true)}
                className="group hidden items-center gap-2 sm:flex"
              >
                {/* prettier-ignore */}
                <svg id="icon-reply" className={`${isReplying ? "fill-interactive-comments-section-light-gray" : "group-hover:opacity-50 fill-interactive-comments-section-moderate-blue"}`} width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/></svg>
                <p
                  className={`${isReplying ? "text-interactive-comments-section-light-gray" : "text-interactive-comments-section-moderate-blue group-hover:opacity-50"} font-medium`}
                >
                  Reply
                </p>
              </button>
            </div>
            <p className="mb-4 text-interactive-comments-section-grayish-blue">
              {comment?.replying_to_username && (
                <span className="mr-1 font-bold text-interactive-comments-section-moderate-blue">
                  @{comment?.replying_to_username}
                </span>
              )}
              {comment?.content}
            </p>
            <div className="flex items-center justify-between sm:hidden">
              <div className="flex items-center gap-3 rounded-md bg-interactive-comments-section-very-light-gray px-3 py-[6px]">
                <button
                  onClick={() => {
                    voteComment(comment?.id, currentUsername, -1);
                  }}
                  className="group py-2"
                >
                  {/* prettier-ignore */}
                  <svg id="icon-minus" className="group-hover:fill-interactive-comments-section-moderate-blue fill-interactive-comments-section-light-grayish-blue" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/></svg>
                </button>
                <p className="font-medium text-interactive-comments-section-moderate-blue">
                  {comment?.score}
                </p>
                <button
                  onClick={() => {
                    voteComment(comment?.id, currentUsername, 1);
                  }}
                  className="group py-1"
                >
                  {/* prettier-ignore */}
                  <svg id="icon-plus" className="group-hover:fill-interactive-comments-section-moderate-blue fill-interactive-comments-section-light-grayish-blue" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
                </button>
              </div>
              <button
                disabled={isReplying}
                onClick={() => setIsReplying(true)}
                className="group flex items-center gap-2"
              >
                {/* prettier-ignore */}
                <svg id="icon-reply" className={`${isReplying ? "fill-interactive-comments-section-light-gray" : "group-hover:opacity-50 fill-interactive-comments-section-moderate-blue"}`} width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/></svg>
                <p
                  className={`${isReplying ? "text-interactive-comments-section-light-gray" : "text-interactive-comments-section-moderate-blue group-hover:opacity-50"} font-medium`}
                >
                  Reply
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isReplying && (
        <div className="mt-3 rounded-lg bg-white p-4">
          <textarea
            onChange={(e) => setReplyContent(e.target.value)}
            className="mb-2 h-28 w-full rounded-lg border border-interactive-comments-section-light-gray px-4 py-2 focus:outline-interactive-comments-section-moderate-blue"
          ></textarea>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setIsReplying(false);
              }}
              className="rounded-md bg-interactive-comments-section-grayish-blue px-4 py-3 hover:opacity-50"
            >
              <p className="font-medium text-white group-hover:opacity-50">
                CANCEL
              </p>
            </button>
            <button
              onClick={() => {
                postReply(comment?.id, replyContent, currentUsername);
                setIsReplying(false);
              }}
              className="rounded-md bg-interactive-comments-section-moderate-blue px-4 py-3 hover:opacity-50"
            >
              <p className="font-medium text-white group-hover:opacity-50">
                REPLY
              </p>
            </button>
          </div>
        </div>
      )}
      {replies?.length > 0 && (
        <div className="mt-3 flex max-w-[1600px]">
          <div className="mr-4 w-1 self-stretch bg-interactive-comments-section-light-gray" />
          <div className="flex flex-1 flex-col gap-3">
            {replies?.map((reply) =>
              currentUsername === reply?.username ? (
                <SelfComment
                  deleteComment={deleteReply}
                  editCommentContent={editReplyContent}
                  currentUsername={currentUsername}
                  voteComment={voteReply}
                  comment={reply}
                />
              ) : (
                <OtherComment
                  currentUsername={currentUsername}
                  voteComment={voteReply}
                  comment={reply}
                />
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
