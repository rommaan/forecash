import React from "react";
import "./JunkSalesAmountBudgeted.css";

function JunkSalesAmountBudgeted(props) {
  const { price, junksalesamountbudge, className } = props;

  return (
    <div className={`junk-sales-amount-budgeted ${className || ""}`}>
      <div className="price-3 valign-text-middle mulish-semi-bold-black-14px">{price}</div>
      <div className="junk-sales-amount-budge valign-text-middle mulish-semi-bold-black-14px">
        {junksalesamountbudge}
      </div>
    </div>
  );
}

export default JunkSalesAmountBudgeted;
