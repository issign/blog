import Link from "../links/Link";

function NestedMenu({ category, subCategory }) {
  const renderedSubCategories = subCategory?.map((subCategory) => {
    return (
      <Link key={subCategory.id} to={subCategory.path}>
        - {subCategory.label}
      </Link>
    );
  });

  return (
    <div className="mb-3">
      <Link to={category.path}>{category.label}</Link>
      <div className="pl-4">{renderedSubCategories}</div>
    </div>
  );
}

export default NestedMenu;
