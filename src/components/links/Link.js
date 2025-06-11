import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="text-2xl cursor-pointer block"
    >
      {children}
    </a>
  );
}

export default Link;
