import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../components/forms/Dropdown";
import Link from "../components/links/Link";
import Icon from "../components/links/Icon";
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
    <div className="w-screen flex justify-between items-center fixed px-20 h-25">
      <Link to="/">SIGN.</Link>
      <div className="flex justify-between items-center w-80">
        {renderedDropdown}
      </div>
      <div className="flex justify-between items-center">
        <Icon to={"https://github.com/issign?tab=repositories"}>
          <FaGithub />
        </Icon>
        <Icon to={"https://www.instagram.com/kiho_lee2734/"}>
          <FaInstagram />
        </Icon>
        <Icon to={"https://www.facebook.com/kiho.lee.993081"}>
          <FaFacebook />
        </Icon>
      </div>
    </div>
  );
}

export default Nav;
