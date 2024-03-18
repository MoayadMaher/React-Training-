import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, acctionBar, children }: any) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed absolute inset-0 bg-gray-300 opacity-80"
      >
        <div className="fixed absolute inset-40 p-10 bg-white">
          <div className="flex flex-col justify-between h-full">
            {children}
            <div className="flex justify-end">{acctionBar}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
