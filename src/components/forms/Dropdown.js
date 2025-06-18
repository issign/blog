import Link from "../links/Link";
import { useFetchSubCategoriesQuery } from "../../store";

function Dropdown({ category }) {
  const {
    data: subCategories,
    error,
    isLoading,
  } = useFetchSubCategoriesQuery(category);

  // Render sub-categories list for a specific category
  let renderedSubCategories;
  if (!isLoading) {
    renderedSubCategories = subCategories.map((subCategory) => {
      return (
        <Link key={subCategory.id} to={category.path + subCategory.path}>
          {subCategory.label}
        </Link>
      );
    });
  }

  return (
    <div className="relative group">
      <Link to={category.path}>{category.label}</Link>
      <div className="absolute hidden group-hover:block">
        {renderedSubCategories}
      </div>
    </div>
  );
}

export default Dropdown;
