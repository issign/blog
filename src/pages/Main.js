import Route from "../components/links/Route";
import PostsList from "../components/posts/PostsList";
import { useFetchPostsQuery } from "../store";

function Main({ categories, subCategories }) {
  const {
    data: posts,
    error: postsError,
    isLoading: isPostsLoading,
  } = useFetchPostsQuery();

  // Need to modify this in the future
  if (isPostsLoading) return <p>Posts Loading...</p>;

  return (
    <div className="pt-20">
      <Route path="/development">
        <PostsList></PostsList>
      </Route>
    </div>
  );
}

export default Main;
