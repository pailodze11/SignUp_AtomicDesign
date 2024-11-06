import React from "react";
import "./Card.css";
import LeftCard from "../molecules/LeftCard/LeftCard.jsx";
import RightCard from "../molecules/RightCard/RightCard.jsx";

const saba = () => {
  return (
    <div className="card">
      <LeftCard />
      <RightCard />
    </div>
  );
};

export default saba;
