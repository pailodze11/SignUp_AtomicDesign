import React from "react";
import check from "../../../../assets/check.svg";
const CheckBox = (props) => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <img src={check} alt="" />
      <p>{props.name}</p>
    </div>
  );
};

export default CheckBox;
