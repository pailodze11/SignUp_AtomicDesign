import React from "react";

const Paragraph = (props) => {
  return (
    <div>
      <p
        style={{
          color: "#242742",
          fontFamily: "Roboto",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "150%",
          width: "376px",
        }}
      >
        {props.name}
      </p>
    </div>
  );
};

export default Paragraph;
