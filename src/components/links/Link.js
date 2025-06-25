import { useContext } from "react";
import classnames from "classnames";
import NavigationContext from "../context/navigation";

function Link({ to, children, className }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  const finalClassNames = classnames("text-xl cursor-pointer block", className);

  return (
    <a href={to} onClick={handleClick} className={finalClassNames}>
      {children}
    </a>
  );
}

export default Link;
