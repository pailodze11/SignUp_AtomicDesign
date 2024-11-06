import React from "react";
import "./InputButton.css";
import Button from "./InputButtonElems/Button";
import Input from "./InputButtonElems/Input";
const InputButton = () => {
  return (
    <div className="InputButton">
      <Input name="Email adress" />
      <Button name="Subscribe to monthly newsletter" />
    </div>
  );
};

export default InputButton;
