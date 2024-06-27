"use client";

import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div>
      <Link href={`/post/${post.id}`}>
        <h3>
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button
        onClick={() => {
          alert("Clic On");
        }}
      >
        {" "}
        clic..
      </button>
    </div>
  );
};

export default PostCard;
