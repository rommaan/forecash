import React from "react";
import "./DailySpend.css";

function DailySpend(props) {
  const { name, price, dailyspendamountI33, className } = props;

  return (
    <div className={`daily-spend ${className || ""}`}>
      <div className="name valign-text-middle mulish-semi-bold-black-24px">{name}</div>
      <div className="us-dand-daily-spend-amount">
        <div className="price valign-text-middle mulish-semi-bold-apple-48px">{price}</div>
        <h1 className="daily-spend-amount-i51 valign-text-middle mulish-semi-bold-apple-48px">{dailyspendamountI33}</h1>
      </div>
    </div>
  );
}

export default DailySpend;
