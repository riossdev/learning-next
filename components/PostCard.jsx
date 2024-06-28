"use client";

import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div>
      <Link href={`/post/${post.id}`}>
        <h3 className="text-2xl mb-4">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button
      className="bg-indigo-500 text-1xl px-2 py-2 rounded-md mt-4 w-80 hover:bg-indigo-600 "
        onClick={() => {
          alert("Clic On");
        }}
      >
        {" "}
        Clic..
      </button> 
    </div>
  );
};

export default PostCard;
