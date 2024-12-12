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
  const currentUser = {
    image: {
      png: "interactive-comments-section/avatars/image-juliusomo.png",
      webp: "interactive-comments-section/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  };

  const selfComment = {
    id: 2,
    content: "Woah",
    createdAt: "2 weeks ago",
    score: 5,
    user: {
      image: {
        png: "interactive-comments-section/avatars/image-maxblagun.png",
        webp: "interactive-comments-section/avatars/image-maxblagun.webp",
      },
      username: "maxblagun",
    },
    replies: [
      {
        id: 3,
        content: "woah 1",
        createdAt: "1 week ago",
        score: 4,
        replyingTo: "maxblagun",
        user: {
          image: {
            png: "interactive-comments-section/avatars/image-ramsesmiron.png",
            webp: "interactive-comments-section/avatars/image-ramsesmiron.webp",
          },
          username: "ramsesmiron",
        },
        replies: [
          {
            id: 3,
            content: "woah 2",
            createdAt: "1 week ago",
            score: 4,
            replyingTo: "maxblagun",
            user: {
              image: {
                png: "interactive-comments-section/avatars/image-ramsesmiron.png",
                webp: "interactive-comments-section/avatars/image-ramsesmiron.webp",
              },
              username: "ramsesmiron",
            },
            replies: [],
          },
        ],
      },
      {
        id: 4,
        content: "woah 3",
        createdAt: "2 days ago",
        score: 2,
        replyingTo: "ramsesmiron",
        user: {
          image: {
            png: "interactive-comments-section/avatars/image-juliusomo.png",
            webp: "interactive-comments-section/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
      },
    ],
  };
  const otherComment = {
    id: 2,
    content: "Woah",
    createdAt: "2 weeks ago",
    score: 5,
    user: {
      image: {
        png: "interactive-comments-section/avatars/image-maxblagun.png",
        webp: "interactive-comments-section/avatars/image-maxblagun.webp",
      },
      username: "maxblagun",
    },
    replies: [
      {
        id: 3,
        content: "woah 2",
        createdAt: "1 week ago",
        score: 4,
        replyingTo: "maxblagun",
        user: {
          image: {
            png: "interactive-comments-section/avatars/image-ramsesmiron.png",
            webp: "interactive-comments-section/avatars/image-ramsesmiron.webp",
          },
          username: "ramsesmiron",
        },
      },
      {
        id: 4,
        content: "woah 3",
        createdAt: "2 days ago",
        score: 2,
        replyingTo: "ramsesmiron",
        user: {
          image: {
            png: "interactive-comments-section/avatars/image-juliusomo.png",
            webp: "interactive-comments-section/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
      },
    ],
  };
  return (
    <div
      className={`bg-interactive-comments-section-very-light-gray flex min-h-screen flex-col items-center gap-3 px-4 py-8 ${rubik.className}`}
    >
      <SelfComment comment={selfComment} />
      <OtherComment comment={otherComment} />
      <div className="w-full max-w-[1600px] rounded-lg bg-white p-4">
        <textarea
          className="focus:outline-interactive-comments-section-moderate-blue border-interactive-comments-section-light-gray mb-2 h-28 w-full rounded-lg border px-4 py-2"
          name="Comment"
          placeholder="Add a comment..."
        ></textarea>
        <div className="flex items-center justify-between">
          <img
            className="w-10"
            src="interactive-comments-section/avatars/image-amyrobson.png"
            alt=""
          />
          <button className="bg-interactive-comments-section-moderate-blue rounded-md px-8 py-3 hover:opacity-50">
            <p className="font-medium text-white group-hover:opacity-50">
              SEND
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
