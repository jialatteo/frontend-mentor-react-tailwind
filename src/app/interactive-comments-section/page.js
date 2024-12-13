"use client";
import { Rubik } from "next/font/google";
import data from "./data.json";
import { useState, useEffect } from "react";
import SelfComment from "./SelfComment";
import OtherComment from "./OtherComment";

const rubik = Rubik({
  weight: ["400", "500", "700"],
});

const getTimeAgoString = (timeCreatedISOString) => {
  const timeCreatedDate = new Date(timeCreatedISOString);
  const nowDate = new Date();
  const diffInMs = nowDate - timeCreatedDate;

  const msPerMinute = 60 * 1000;
  const msPerHour = 60 * msPerMinute;
  const msPerDay = 24 * msPerHour;
  const msPerWeek = 7 * msPerDay;
  const formatTime = (value, unit) =>
    `${value} ${unit}${value === 1 ? "" : "s"} ago`;

  let timeDifference;
  if (diffInMs < msPerMinute) {
    timeDifference = formatTime(Math.round(diffInMs / 1000), "second");
  } else if (diffInMs < msPerHour) {
    timeDifference = formatTime(Math.round(diffInMs / msPerMinute), "minute");
  } else if (diffInMs < msPerDay) {
    timeDifference = formatTime(Math.round(diffInMs / msPerHour), "hour");
  } else if (diffInMs < msPerWeek) {
    timeDifference = formatTime(Math.round(diffInMs / msPerDay), "day");
  } else {
    timeDifference = formatTime(Math.round(diffInMs / msPerWeek), "week");
  }

  return timeDifference;
};

export default function InteractiveCommentsSection() {
  // const currentUsername = data?.currentUser.username;
  const currentUsername = "juliusomo";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/comments")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log("data", data);

  return (
    <div
      className={`flex min-h-screen flex-col items-center gap-3 bg-interactive-comments-section-very-light-gray px-4 py-8 ${rubik.className}`}
    >
      {data?.map((comment) =>
        currentUsername === comment?.username ? (
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
