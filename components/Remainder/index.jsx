import React from "react";
import Autopay from "../Autopay";
import "./Remainder.css";

function Remainder(props) {
  const { text19, autopayProps } = props;

  return (
    <div className="remainder-1 border-1px-black">
      <div className="text-30 valign-text-middle mulish-semi-bold-black-18px">{text19}</div>
      <Autopay
        text15={autopayProps.text15}
        autopayAmountBudgetedProps={autopayProps.autopayAmountBudgetedProps}
        autopayAmountActualProps={autopayProps.autopayAmountActualProps}
        autopayAmountBudgeted2Props={autopayProps.autopayAmountBudgeted2Props}
        className="remainder"
      />
    </div>
  );
}

export default Remainder;
