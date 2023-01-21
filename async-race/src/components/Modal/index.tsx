import { useState, FunctionComponent } from "react";
import ReactDOM from "react-dom";

import { IModal } from "../../interfaces/modal";

import "./modal.scss";

const Modal: FunctionComponent<IModal> = ({ onClose, show, inn }) => {
  return ReactDOM.createPortal(
    <div className={`modal${show ? " show" : ""}`} onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {inn}
      </div>
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("root")!
  );
};

export default Modal;
