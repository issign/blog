import PostsList from "../components/posts/PostsList";

function HomePage({ posts }) {
  return (
    <div className="pt-20">
      <PostsList posts={posts}></PostsList>
    </div>
  );
}

export default HomePage;
