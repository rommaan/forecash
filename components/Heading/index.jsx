import React from "react";
import "./Heading.css";

function Heading(props) {
  const { text9, text8, text7, text6, className } = props;

  return (
    <div className={`heading ${className || ""}`}>
      <div className="text-20 valign-text-middle mulish-semi-bold-black-14px">{text9}</div>
      <div className="text-1 valign-text-middle mulish-semi-bold-black-14px">{text8}</div>
      <div className="text-1 valign-text-middle mulish-semi-bold-black-14px">{text7}</div>
      <div className="text-17 valign-text-middle mulish-semi-bold-black-14px">{text6}</div>
    </div>
  );
}

export default Heading;
