import loadPostss from "../page.jsx";

const loadOnlyPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return(data);
};

const Post = async ({ params }) => {
  const post = await loadOnlyPost(params.postid);

  return (
    <div>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <hr />
      <h4>Otras Publicaciones.</h4>
      <loadPostss />
     
    </div>
  );
};

export default Post;
