import Link from "../links/Link";

// category is an object and options are a list of objects
function NavDropdown({ category, options }) {
  const renderedNav = options.map((option) => {
    return (
      <Link key={option.id} to={option.path}>
        {option.label}
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

export default NavDropdown;
