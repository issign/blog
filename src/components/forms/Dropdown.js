import { useState, useEffect } from "react";
import axios from "axios";
import Link from "../links/Link";

function Dropdown({ category }) {
  const [subCategories, setSubCategories] = useState([]);

  const fetchSubCategories = async () => {
    const res = await axios.get("http://localhost:3001/sub-categories", {
      params: { categoryID: category.id },
    });

    setSubCategories(res.data);
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  const renderedSubCategories = subCategories.map((subCategory) => {
    return (
      <Link key={subCategory.id} to={category.path + subCategory.path}>
        {subCategory.label}
      </Link>
    );
  });

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
