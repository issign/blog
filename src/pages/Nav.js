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
    <div className="w-screen flex justify-between items-center fixed px-30 h-25 bg-antique-white text-eclipse">
      <Link>SIGN</Link>
      <div className="flex justify-between items-center w-80">
        {renderedPosts}
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
