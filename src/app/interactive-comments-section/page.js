"use client";
import { Rubik } from "next/font/google";
import data from "./data.json";
import { useState } from "react";
import SelfComment from "./SelfComment";
import OtherComment from "./OtherComment";

const rubik = Rubik({
  weight: ["400", "500", "700"],
});

export default function InteractiveCommentsSection() {
  const [isDeleteModalOpen, setIsDeletModalOpen] = useState(false);
  const currentUsername = data?.currentUser.username;

  return (
    <div
      className={`flex min-h-screen flex-col items-center gap-3 bg-interactive-comments-section-very-light-gray px-4 py-8 ${rubik.className}`}
    >
      {data?.comments?.map((comment) =>
        currentUsername === comment?.user?.username ? (
          <SelfComment currentUsername={currentUsername} comment={comment} />
        ) : (
          <OtherComment currentUsername={currentUsername} comment={comment} />
        ),
      )}
      <div className="w-full max-w-[1600px] rounded-lg bg-white p-4">
        <textarea
          className="mb-2 h-28 w-full rounded-lg border border-interactive-comments-section-light-gray px-4 py-2 focus:outline-interactive-comments-section-moderate-blue"
          name="Comment"
          placeholder="Add a comment..."
        ></textarea>
        <div className="flex items-center justify-between">
          <img
            className="w-10"
            src={data?.currentUser?.image?.png}
            alt="current-user-image"
          />
          <button className="rounded-md bg-interactive-comments-section-moderate-blue px-8 py-3 hover:opacity-50">
            <p className="font-medium text-white group-hover:opacity-50">
              SEND
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
