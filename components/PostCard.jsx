"use client"

const PostCard = ({post}) => {
  return (
    <div>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={()=>{alert('Clic On')}}> clic..</button>
    </div>
  );
};

export default PostCard;
