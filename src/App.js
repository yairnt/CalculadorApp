import "./App.css";
import Buttons from "./components/Buttons";
import ClearButton from "./components/ClearButton";
import InputValue from "./components/InputValue";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("0");

  const agregarInput = (val) => {
    if (input === "0") {
      setInput(val);
    } else if (input.match(/(\+|-|\/|\*)/g) && val.match(/(\+|-|\/|\*)/g)) {
      if (input.substring(input.length - 1).match(/(\+|-|\/|\*)/g)) {
        setInput(input.substring(0, input.length - 1) + val);
      } else {
        return setInput(evaluate(input) + val);
      }
    } else if (val === "+" || val === "-" || val === "*" || val === "/") {
      if (
        input[input.length - 1] === "+" ||
        input[input.length - 1] === "-" ||
        input[input.length - 1] === "*" ||
        input[input.length - 1] === "/"
      ) {
        setInput(() => input.replace(input[input.length - 1], val));
      } else {
        setInput(input + val);
      }
    } else setInput(input + val);
  };

  const calcularResultado = () => {
    if (
      input[input.length - 1] === "+" ||
      input[input.length - 1] === "-" ||
      input[input.length - 1] === "*" ||
      input[input.length - 1] === "/"
    ) {
      alert("Ingrese valor correctamente");
    } else if (input) {
      setInput(evaluate(input) + "");
    } else {
      alert("Ingrese numero");
    }
  };

  return (
    <div className="App">
      <h1 className="mainTitle"> CalculadorApp </h1>

      <div className="cal-content">
        <InputValue input={input} />

        <div className="fila">
          <Buttons handleClick={agregarInput}>1</Buttons>
          <Buttons handleClick={agregarInput}>2</Buttons>
          <Buttons handleClick={agregarInput}>3</Buttons>
          <Buttons handleClick={agregarInput}>+</Buttons>
        </div>

        <div className="fila">
          <Buttons handleClick={agregarInput}>4</Buttons>
          <Buttons handleClick={agregarInput}>5</Buttons>
          <Buttons handleClick={agregarInput}>6</Buttons>
          <Buttons handleClick={agregarInput}>-</Buttons>
        </div>

        <div className="fila">
          <Buttons handleClick={agregarInput}>7</Buttons>
          <Buttons handleClick={agregarInput}>8</Buttons>
          <Buttons handleClick={agregarInput}>9</Buttons>
          <Buttons handleClick={agregarInput}>*</Buttons>
        </div>

        <div className="fila">
          <Buttons handleClick={calcularResultado}>=</Buttons>
          <Buttons handleClick={agregarInput}>0</Buttons>
          <Buttons handleClick={agregarInput}>.</Buttons>
          <Buttons handleClick={agregarInput}>/</Buttons>
        </div>

        <div className="fila">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
