import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, onSubmit, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    onSubmit();
  };

  return (
    <a href={to} onClick={handleClick} className="text-2xl cursor-pointer">
      {children}
    </a>
  );
}

export default Link;
