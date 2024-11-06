import React from "react";
import TextContent from "../atoms/TextContent/TextContent";
import InputButton from "../atoms/InputButton/InputButton";
import "./LeftBoxContent.css";
const LeftBoxContent = () => {
  return (
    <div className="LeftBoxContent">
      <TextContent />
      <InputButton />
    </div>
  );
};

export default LeftBoxContent;
