function Link({ onSubmit, children }) {
  const handleClick = () => {
    onSubmit();
  };

  return (
    <div className="text-2xl cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  );
}

export default Link;
