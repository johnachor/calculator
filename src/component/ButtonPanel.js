import Button from "./Button";
import React from "react";
import "./ButtonPanel.css";

export const ButtonPanel = ({ clickHandler }) => (
  <div className="component-button-panel">
    <div>
      <Button name="AC" clickHandler={clickHandler} />
      <Button name="+/-" clickHandler={clickHandler} />
      <Button name="%" clickHandler={clickHandler} />
      <Button name="÷" clickHandler={clickHandler} orange />
    </div>
    <div>
      <Button name="7" clickHandler={clickHandler} />
      <Button name="8" clickHandler={clickHandler} />
      <Button name="9" clickHandler={clickHandler} />
      <Button name="x" clickHandler={clickHandler} orange />
    </div>
    <div>
      <Button name="4" clickHandler={clickHandler} />
      <Button name="5" clickHandler={clickHandler} />
      <Button name="6" clickHandler={clickHandler} />
      <Button name="-" clickHandler={clickHandler} orange />
    </div>
    <div>
      <Button name="1" clickHandler={clickHandler} />
      <Button name="2" clickHandler={clickHandler} />
      <Button name="3" clickHandler={clickHandler} />
      <Button name="+" clickHandler={clickHandler} orange />
    </div>
    <div>
      <Button name="0" clickHandler={clickHandler} wide />
      <Button name="." clickHandler={clickHandler} />
      <Button name="=" clickHandler={clickHandler} orange />
    </div>
  </div>
);

export default ButtonPanel;
