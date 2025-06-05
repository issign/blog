import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../components/forms/Dropdown";

function Nav() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3001/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const categories = new Set(posts.map((post) => post.category));
  const renderedPosts = Array.from(categories).map((category, i) => {
    const relatedPosts = posts.filter((post) => post.category == category);
    return (
      <Dropdown names={relatedPosts} key={i}>
        {category}
      </Dropdown>
    );
  });

  return (
    <div>
      <Dropdown>소개</Dropdown>
      {renderedPosts}
    </div>
  );
}

export default Nav;
