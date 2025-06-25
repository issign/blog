import { useState } from "react";

function Dropdown({ options, selection, placeholder, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const renderedOption = options?.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.id}>
        {option.label}
      </div>
    );
  });

  let content = placeholder;
  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderedOption}</div>}
    </div>
  );
}

export default Dropdown;
