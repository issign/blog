import { useFetchCategoriesQuery } from "../store";
import Dropdown from "../components/forms/Dropdown";
import Skeleton from "../components/loading/Skeleton";
import Link from "../components/links/Link";
import Icon from "../components/links/Icon";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Nav({ categories, subCategories }) {

  const renderedDropdown = categories.map((category) => {
    return <Dropdown category={category} key={category.id} />;
  });

  return (
    <div className="flex justify-between items-center fixed h-20 w-[calc(100vw-160px)]">
      <Link to="/">SIGN.</Link>
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
