import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../components/forms/Dropdown";
import Link from "../components/links/Link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Nav() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3001/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Find all the categories.
  const categories = new Set(posts.map((post) => post.category));
  // And find the posts which have the same category.
  const renderedPosts = Array.from(categories).map((category, i) => {
    const relatedPosts = posts.filter((post) => post.category == category);
    return <Dropdown name={category} posts={relatedPosts} key={i} />;
  });

  return (
    <div>
      <div>
        <Link>SIGN</Link>
      </div>
      <div>
        {renderedPosts}
      </div>
      <div>
        <FaGithub />
        <FaInstagram />
        <FaFacebook />
      </div>
    </div>
  );
}

export default Nav;
