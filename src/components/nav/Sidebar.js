import SidebarList from "./SidebarList";

function Sidebar({ categories, subCategories }) {
  const renderedLists = categories.map((category) => {
    const filteredSubCategories = subCategories.filter(
      (subCategory) => subCategory.categoryID == category.id
    );

    return (
      <SidebarList
        key={category.id}
        category={category}
        subCategory={filteredSubCategories}
      ></SidebarList>
    );
  });
  return <div className="pb-10">{renderedLists}</div>;
}

export default Sidebar;
