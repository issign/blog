function Icon({ to, children }) {
  return (
    <a
      href={to}
      target="_blank"
      className="text-3xl mx-4 cursor-pointer hover:text-cyan-500"
    >
      {children}
    </a>
  );
}

export default Icon;
