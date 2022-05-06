import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export const App = () => {
  const [total, setTotal] = useState("0");
  const [next, setNext] = useState("");
  const [operation, setOperation] = useState("");

  const handleClick = buttonName => {
    const {
      total: calcTotal,
      next: calcNext,
      operation: calcOperation,
    } = calculate(total, next, operation, buttonName);
    setNext(calcNext);
    setOperation(calcOperation);
    setTotal(calcTotal);
  };

  const displayValue = next.length === 0 ? total : next;

  return (
    <div className="component-app">
      <Display value={displayValue} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
