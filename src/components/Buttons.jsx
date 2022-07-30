import React from "react";
import "./styles.css";

function Buttons({ handleClick, children }) {
  const esOperador = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => {
        handleClick(children);
      }}
    >
      {children}
    </div>
  );
}

export default Buttons;
