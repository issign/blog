import Sidebar from "../components/nav/Sidebar";

function PostsListPage({ categories, subCategories }) {
  return (
    <div>
      <Sidebar categories={categories} subCategories={subCategories}></Sidebar>
    </div>
  );
}

export default PostsListPage;
