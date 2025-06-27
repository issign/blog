import Route from "../components/links/Route";
import Sidebar from "../components/links/Sidebar";
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
      <Sidebar
        categories={categories}
        subCategories={subCategories}
        posts={posts}
      ></Sidebar>
    </div>
  );
}

export default Main;
