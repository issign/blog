import { useState } from "react";
import Panel from "../ui/Panel";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function Dropdown({ options, selection, placeholder, onSelect, className }) {
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
      <div
        onClick={() => handleOptionClick(option)}
        key={option.id}
        className="bg-white py-2 pl-2"
      >
        {option.label}
      </div>
    );
  });

  let content = placeholder;
  if (selection) {
    content = selection.label;
  }

  return (
    <div className="cursor-pointer bg-primary-color text-black rounded-md text-lg relative">
      <div onClick={handleClick} className="flex justify-start">
        <div className="px-4 py-3">{content}</div>
        <Panel className="px-4">
          {isOpen ? <FaChevronDown /> : <FaChevronLeft />}
        </Panel>
      </div>
      <div className="absolute w-40 z-99">
        {isOpen && <div>{renderedOption}</div>}
      </div>
    </div>
  );
}

export default Dropdown;
