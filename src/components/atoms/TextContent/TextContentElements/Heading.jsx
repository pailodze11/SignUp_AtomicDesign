import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h1
        style={{
          color: "#242742",
          fontFamily: "Roboto",
          fontSize: "56px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "100%",
        }}
      >
        {props.name}
      </h1>
    </div>
  );
};

export default Heading;
