import PostCard from "../../components/PostCard";

const LoadPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise ((resolve) => setTimeout(resolve, 2000))
  return data;
};

const loadPostss = async () => {
  const posts = await LoadPost();
  console.log(posts);
  return (
    <>
      <h1>Post</h1>
      <div>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};
export default loadPostss;
