import { useState, useEffect, useRef } from "react";
import Link from "../links/Link";

function Dropdown({ posts, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
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

  const renderedPosts = posts.map((post) => {
    return <Link key={post.id}>{post.name}</Link>;
  });

  return (
    <div ref={divEl} className="relative">
      <Link onSubmit={handleClick} to="/a">
        {name}
      </Link>
      {isOpen && <div className="absolute">{renderedPosts}</div>}
    </div>
  );
}

export default Dropdown;
