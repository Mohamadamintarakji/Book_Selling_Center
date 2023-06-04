import React from "react";
import ReactDOM from "react-dom";
import { useAppContext } from "../../context/appContext";

const Overlay = ({ setForm }) => (
  <div className="overlay" onClick={() => setForm(false)}></div>
);
const BackDrop = ({ children }) => <div className="editForm">{children}</div>;
const Modal = ({ children }) => {
  const { setForm } = useAppContext();

  return (
    //   state && (
    <>
      {ReactDOM.createPortal(
        <>
          <Overlay setForm={setForm} />
          <BackDrop children={children} />
        </>,
        document.getElementById("modal")
      )}
    </>
  );
  // );
};

export default Modal;
