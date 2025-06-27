import NestedMenu from "../ui/NestedMenu";

function Sidebar({ categories, subCategories }) {
  const renderedLists = categories.map((category) => {
    const filteredSubCategories = subCategories.filter(
      (subCategory) => subCategory.categoryID == category.id
    );

    return (
      <NestedMenu
        key={category.id}
        category={category}
        subCategory={filteredSubCategories}
      ></NestedMenu>
    );
  });
  return <div>{renderedLists}</div>;
}

export default Sidebar;
