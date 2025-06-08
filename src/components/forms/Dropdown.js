import { useState, useEffect, useRef } from "react";
import Link from "./Link";

function Dropdown({ posts, children }) {
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
    <div ref={divEl}>
      <div onClick={handleClick}>{children}</div>
      {isOpen && <div>{renderedPosts}</div>}
    </div>
  );
}

export default Dropdown;
