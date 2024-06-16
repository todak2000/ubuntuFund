"use client";

import { key } from "@/lib/helpers/uniqueKey";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import TimeAgo from "./timeFormater";

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
    <div className="p-4 border border-gray-200 shadow-md rounded-md hover:bg-gray-100 w-full mt-4 mb-8 rounded">
      {showCreateComment && (
        <div
          onClick={toggleShowCreateComment}
          className="w-full p-2 flex flex-col cursor-pointer  justify-start "
        >
          <h4>
            comments <span>{comments.length}</span>
          </h4>
          <span className="text-lg text-gray-600  flex flex-row justify-start items-start p-4  h-20 text-center w-10/12">
            {comments.length > 0 ? comments[0]?.text : "No comment available"}
          </span>
        </div>
      )}
      {!showCreateComment && (
        <>
          <div className=" flex mb-4 flex-row w-full justify-between items-center">
            <h4>Comments</h4>
            <span
              onClick={toggleShowCreateComment}
              className="w-8 h-8 rounded-full flex bg-gray-100 hover:bg-gray-200 flex-col justify-center items-center"
            >
              <FaTimes className="text-xs" />
            </span>
          </div>

          <div className="space-y-2 p-2 overflow-y-auto h-60 md:h-40  w-full">
            {comments.length <= 0 ? (
              <div className="flex w-full h-full flex-col justify-center items-center">
                <h3 className="text-black text-base">No comment available</h3>
              </div>
            ) : (
              <>
                {comments.map((comment) => (
                  <div key={key()} className="bg-gray-100 p-2 rounded">
                    <div className="flex my-2 flex-row justify-start gap-3 items-center w-full">
                      <span className="h-6 w-6 rounded-full text-white text-xl bg-black flex flex-row justify-center items-center">
                        A
                      </span>
                      <h4>@ Anonymous~</h4>
                      <TimeAgo timestamp={comment.id} />
                    </div>
                    <span className="flex text-sm h-10 flex-row justify-start items-center w-full">
                      {comment.text}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full md:w-3/4"
              placeholder="Write a comment..."
            />
            <button
              onClick={handleAddComment}
              className="mt-2 md:mt-0  text-black p-2 hover:text-white bg-white rounded border hover:bg-gray-500 w-full md:w-1/4 "
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
