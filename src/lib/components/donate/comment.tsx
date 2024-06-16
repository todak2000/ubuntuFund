"use client";

import { key } from "@/lib/helpers/uniqueKey";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import TimeAgo from "./timeFormater";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface CommentProps {
  id: number;
  text: string;
}

const AddComment: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [commentText, setCommentText] = useState("");
  const [showCreateComment, setShowCreateComment] = useState<boolean>(false);

  const toggleShowCreateComment = () => {
    setShowCreateComment(!showCreateComment);
  };
  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments([...comments, { id: Date.now(), text: commentText }]);
      setCommentText("");
    }
  };

  return (
    <div className="p-4 border border-gray-200 shadow-md  hover:bg-gray-100 w-full mt-4 mb-8 rounded">
      <div className="flex mb-4 flex-row w-full justify-between items-center">
        <h4>Comments ({comments.length})</h4>
        <span
          onClick={toggleShowCreateComment}
          className="w-8 h-8 rounded-full flex bg-gray-100 hover:bg-gray-200 flex-col justify-center items-center"
        >
          {/* <FaTimes className="text-xs" /> */}
          {showCreateComment ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      {showCreateComment && (
        <div
          onClick={toggleShowCreateComment}
          className="w-full py-2 flex flex-col cursor-pointer  justify-start "
        >
          <span className="text-lg text-gray-600  flex flex-row justify-start items-start p-4  h-20 text-center w-10/12">
            {comments.length > 0 ? comments[0]?.text : "No comment available"}
          </span>
        </div>
      )}
      {!showCreateComment && (
        <>
          <div className="space-y-2 p-2 overflow-y-auto min-h-60 md:min-h-40 max-h-[60vh]  w-full">
            {comments.length <= 0 ? (
              <div className="flex w-full h-full flex-col justify-center items-center">
                <p className="text-black text-base">
                  Be the Spark That Ignites the Conversation!
                </p>
              </div>
            ) : (
              <>
                {comments.map((comment) => (
                  <div key={key()} className="bg-gray-100 p-2 rounded">
                    <div className="flex my-2 flex-row justify-start gap-3 items-start w-full">
                      <span className="size-12 rounded-full text-white text-xl bg-black flex flex-row justify-center items-center">
                        A
                      </span>
                      <div className="w-[90%]">
                        <p>@Anonymous~</p>
                        <TimeAgo timestamp={comment.id} />
                        <p className="flex mt-3 text-sm flex-row justify-start items-center w-full">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
            <textarea
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full md:w-3/4"
              placeholder="Write a comment..."
            />
            <button
              onClick={handleAddComment}
              className="mt-2 md:mt-0  bg-black p-2 hover:opacity-90 text-white rounded border  w-full md:w-1/4 "
            >
              Add Comment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddComment;
