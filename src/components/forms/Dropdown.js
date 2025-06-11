import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "../links/Link";

function Dropdown({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const divEl = useRef();

  const fetchSubCategories = async () => {
    const res = await axios.get("http://localhost:3001/sub-categories", {
      params: { categoryID: category.id },
    });

    setSubCategories(res.data);
  };

  useEffect(() => {
    fetchSubCategories();
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }

      document.addEventListener("click", handler, true);

      return () => {
        document.removeEventListener("click", handler);
      };
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderedSubCategories = subCategories.map((subCategory) => {
    return (
      <Link key={subCategory.id} to={category.path + subCategory.path}>
        {subCategory.label}
      </Link>
    );
  });

  return (
    <div ref={divEl} className="relative">
      <Link onSubmit={handleClick} to={category.path}>
        {category.label}
      </Link>
      {isOpen && <div className="absolute">{renderedSubCategories}</div>}
    </div>
  );
}

export default Dropdown;
