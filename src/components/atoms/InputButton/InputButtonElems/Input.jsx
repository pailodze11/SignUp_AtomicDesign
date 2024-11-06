import React from "react";
import "./Input.css";
const Input = (props) => {
  return (
    <div className="InputCont">
      <p>{props.name}</p>
      <input className="Input" type="text" placeholder="email@company.com" />
    </div>
  );
};

export default Input;
