import Link from "../links/Link";

// category is an object and options are a list of objects
function Dropdown({ category, options }) {
  const renderedNav = options.map((subCategory) => {
    return (
      <Link key={subCategory.id} to={category.path + subCategory.path}>
        {subCategory.label}
      </Link>
    );
  });

  return (
    <div className="relative group">
      <Link to={category.path}>{category.label}</Link>
      <div className="absolute hidden group-hover:block">{renderedNav}</div>
    </div>
  );
}

export default Dropdown;
