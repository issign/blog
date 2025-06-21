import classNames from "classnames";

function Icon({ to, className, children }) {
  const iconClassNames = classNames(
    "text-2xl",
    "cursor-pointer",
    "hover:text-cyan-500",
    className
  )

  return (
    <a
      href={to}
      target="_blank"
      className={iconClassNames}
    >
      {children}
    </a>
  );
}

export default Icon;
