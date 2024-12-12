import { useState } from "react";

export default function SelfComment({ comment }) {
  const [isDeleteModalOpen, setIsDeletModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <div className="rounded-lg bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              className="w-10"
              src={comment.user.image.png}
              alt="user-image"
            />
            <div className="flex items-center gap-2">
              <p className="font-bold">{comment.user.username}</p>
              <p className="bg-interactive-comments-section-moderate-blue rounded-sm px-[6px] text-sm font-medium text-white">
                you
              </p>
            </div>
            <p className="text-interactive-comments-section-grayish-blue">
              {comment.createdAt}
            </p>
          </div>
        </div>
        <p className="text-interactive-comments-section-grayish-blue mb-4">
          {comment.content}
        </p>
        <div className="flex items-center justify-between">
          <div className="bg-interactive-comments-section-very-light-gray flex items-center gap-3 rounded-md px-3 py-[6px]">
            <button className="group py-1">
              {/* prettier-ignore */}
              <svg id="icon-plus" className="group-hover:fill-interactive-comments-section-moderate-blue fill-interactive-comments-section-light-grayish-blue" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
            </button>
            <p className="text-interactive-comments-section-moderate-blue font-medium">
              {comment.score}
            </p>
            <button className="group py-2">
              {/* prettier-ignore */}
              <svg id="icon-minus" className="group-hover:fill-interactive-comments-section-moderate-blue fill-interactive-comments-section-light-grayish-blue" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/></svg>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsDeletModalOpen(true)}
              className="group flex items-center gap-[6px]"
            >
              {/* prettier-ignore */}
              <svg id="icon-delete" className="group-hover:opacity-50" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
              <p className="text-interactive-comments-section-soft-red font-bold group-hover:opacity-50">
                Delete
              </p>
            </button>
            <button className="group flex items-center gap-[6px]">
              {/* prettier-ignore */}
              <svg id="icon-edit" className="group-hover:opacity-50" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
              <p className="text-interactive-comments-section-moderate-blue font-bold group-hover:opacity-50">
                Edit
              </p>
            </button>
          </div>
        </div>
        {isDeleteModalOpen && (
          <div className="fixed inset-0">
            <div
              onClick={() => setIsDeletModalOpen(false)}
              className="fixed inset-0 bg-black opacity-50"
            ></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4">
              <p className="text-interactive-comments-section-dark-blue mb-3 text-lg font-bold">
                Delete comment
              </p>
              <p className="text-interactive-comments-section-grayish-blue mb-3">
                Are you sure you want to delete this comment? This will remove
                the comment and can't be undone.
              </p>
              <div className="flex justify-center gap-3 text-white">
                <button
                  onClick={() => setIsDeletModalOpen(false)}
                  className="bg-interactive-comments-section-grayish-blue rounded-md px-4 py-2 hover:opacity-50"
                >
                  <p>NO, CANCEL</p>
                </button>
                <button className="bg-interactive-comments-section-soft-red rounded-md px-4 py-2 hover:opacity-50">
                  <p>YES, DELETE</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {comment?.replies?.length > 0 && (
        <div className="mt-3 flex">
          <div className="bg-interactive-comments-section-light-gray mr-4 w-1 self-stretch" />
          <div className="flex flex-col gap-3">
            {comment?.replies?.map((reply) => (
              <SelfComment key={reply.id} comment={reply} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
