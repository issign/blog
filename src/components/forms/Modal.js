import { createPortal } from "react-dom";

function Modal({ onClose, actionBar, children }) {
  return createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-90 p-10 bg-white flex flex-col justify-between">
        {children}
        <div className="mt-10 flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
