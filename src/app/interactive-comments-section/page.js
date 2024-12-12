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
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
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
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
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
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
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
        content:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
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
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
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
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
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
        content:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
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
      <div className="w-full rounded-lg bg-white p-4">
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
