import NavDropdown from "./NavDropdown";
import Skeleton from "../loading/Skeleton";
import Link from "../links/Link";
import Icon from "../links/Icon";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// props : all categories and sub-categories
function Nav({ categories, subCategories }) {
  // Showing Dropdown component with the same categories
  const renderedDropdown = categories.map((category) => {
    const filteredSubCategories = subCategories.filter(
      (subCategory) => subCategory.categoryID == category.id
    );
    return (
      <NavDropdown
        options={filteredSubCategories}
        category={category}
        key={category.id}
      />
    );
  });

  return (
    <div className="flex justify-between items-center fixed h-20 w-[calc(100vw-160px)]">
      <Link to="/" className="font-bold">
        SIGN.
      </Link>
      <div className="flex justify-between items-center w-80">
        {renderedDropdown}
      </div>
      <div className="flex justify-between items-center">
        <Icon
          to={"https://github.com/issign?tab=repositories"}
          className="mr-10"
        >
          <FaGithub />
        </Icon>
        <Icon to={"https://www.instagram.com/kiho_lee2734/"} className="mr-10">
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
