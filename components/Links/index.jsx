import React from "react";
import "./Links.css";

function Links(props) {
  const { text47, text48, text49, text50, aboutI505324146 } = props;

  return (
    <div className="links">
      <div className="text-47 valign-text-middle mulish-semi-bold-cape-cod-14px">{text47}</div>
      <div className="text-48 valign-text-middle mulish-semi-bold-cape-cod-14px">{text48}</div>
      <div className="text-49 valign-text-middle mulish-semi-bold-cape-cod-14px">{text49}</div>
      <div className="text-50 valign-text-middle mulish-semi-bold-cape-cod-14px">{text50}</div>
      <div className="about-i505324146 valign-text-middle mulish-semi-bold-cape-cod-14px">{aboutI505324146}</div>
    </div>
  );
}

export default Links;
