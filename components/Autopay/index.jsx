import React from "react";
import AutopayAmountBudgeted from "../AutopayAmountBudgeted";
import AutopayAmountActual from "../AutopayAmountActual";
import "./Autopay.css";

function Autopay(props) {
  const {
    text15,
    autopayAmountBudgetedProps,
    autopayAmountActualProps,
    autopayAmountBudgeted2Props,
    className,
  } = props;

  return (
    <div className={`autopay ${className || ""}`}>
      <div className="text-26 valign-text-middle mulish-semi-bold-black-14px">{text15}</div>
      <AutopayAmountBudgeted
        autopayamountbudgete={autopayAmountBudgetedProps.autopayamountbudgete}
        price={autopayAmountBudgetedProps.price}
      />
      <AutopayAmountActual
        autopayamountactualn={autopayAmountActualProps.autopayamountactualn}
        price={autopayAmountActualProps.price}
      />
      <AutopayAmountBudgeted
        autopayamountbudgete={autopayAmountBudgeted2Props.autopayamountbudgete}
        price={autopayAmountBudgeted2Props.price}
        className="autopay-amount-difference"
      />
    </div>
  );
}

export default Autopay;
