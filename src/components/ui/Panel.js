import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "flex justify-center items-center",
    className
  );

  return (
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  );
}

export default Panel;
