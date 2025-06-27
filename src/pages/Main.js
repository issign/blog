import Route from "../components/links/Route";
import Sidebar from "../components/links/Sidebar";

function Main({ categories, subCategories }) {
  return (
    <div className="pt-20">
      <Sidebar categories={categories} subCategories={subCategories}></Sidebar>
    </div>
  );
}

export default Main;
