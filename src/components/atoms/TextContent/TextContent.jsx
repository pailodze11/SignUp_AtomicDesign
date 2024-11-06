import React from "react";
import "./TextContent.css";
import Heading from "../../atoms/TextContent/TextContentElements/Heading";
import Paragraph from "../../atoms/TextContent/TextContentElements/Paragraph";
import CheckBox from "../../atoms/TextContent/TextContentElements/CheckBox";
const TextContent = () => {
  return (
    <div className="TextContent">
      <Heading name="Stay updated!" />
      <Paragraph name="Join 60,000+ product managers receiving monthly updates on:" />
      <CheckBox name="Product discovery and building what matters" />
      <CheckBox name="Measuring to ensure updates are a success" />
      <CheckBox name="And much more!" />
    </div>
  );
};

export default TextContent;

// ამ ელემენტებს უბრალოდ აღარ შევუქმენი ცალკე css ფაილები კაი ჩახლართული კოდია ვიცი პროსტა
// მაქსიმალურად ვეცადე ეს მეთოდოლოგია გემომეყენებინა
