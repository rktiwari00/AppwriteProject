import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border dark:border-gray-700">
        <div className="relative overflow-hidden bg-cover bg-center h-48">
          <img
            src={service.getFilePreview(featuredImage)}
            className="w-full h-full object-cover"
            alt={title}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white line-clamp-2">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
