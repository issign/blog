import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../components/forms/Dropdown";
import Link from "../components/links/Link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Nav() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:3001/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const renderedDropdown = categories.map((category) => {
    return <Dropdown category={category} key={category.id} />;
  });

  return (
    <div className="w-screen flex justify-between items-center fixed px-30 h-25 bg-antique-white text-eclipse">
      <Link to="/">SIGN.</Link>
      <div className="flex justify-between items-center w-80">
        {renderedDropdown}
      </div>
      <div className="flex justify-between items-center">
        <FaGithub className="text-3xl mx-4 cursor-pointer hover:text-cyan-500" />
        <FaInstagram className="text-3xl mx-4 cursor-pointer hover:text-cyan-500" />
        <FaFacebook className="text-3xl ml-4 cursor-pointer hover:text-cyan-500" />
      </div>
    </div>
  );
}

export default Nav;
