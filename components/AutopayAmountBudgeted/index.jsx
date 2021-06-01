import React from "react";
import "./AutopayAmountBudgeted.css";

function AutopayAmountBudgeted(props) {
  const { autopayamountbudgete, price, className } = props;

  return (
    <div className={`autopay-amount-budgeted ${className || ""}`}>
      <div className="overlap-group2-1">
        <div className="autopay-amount-budgete valign-text-middle mulish-semi-bold-black-14px">
          {autopayamountbudgete}
        </div>
        <div className="price-4 valign-text-middle mulish-semi-bold-black-14px">{price}</div>
      </div>
    </div>
  );
}

export default AutopayAmountBudgeted;
