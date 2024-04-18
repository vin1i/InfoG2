import "./Styled.css";
import { useRef } from "react";

function Modal() {
  const ref = useRef();
  return (
    <form className="FormContainer" ref={ref}>
      <div className="InputArea">
        <label className="Label"></label>
        <input
          className="Input"
          placeholder="Nome e CPF"
          name="NOME"
          type="search"
        />{" "}
      </div>

      <button type="submit" className="Button">
        +
      </button>
    </form>
  );
}

export default Modal;
