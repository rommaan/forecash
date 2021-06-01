import React from "react";
import "./AutopayAmountActual.css";

function AutopayAmountActual(props) {
  const { autopayamountactualn, price, className } = props;

  return (
    <div className={`autopay-amount-actual ${className || ""}`}>
      <div className="overlap-group1-2">
        <div className="autopay-amount-actual-n valign-text-middle mulish-regular-normal-black-14px">
          {autopayamountactualn}
        </div>
        <div className="price-5 valign-text-middle mulish-regular-normal-black-14px">{price}</div>
      </div>
    </div>
  );
}

export default AutopayAmountActual;
