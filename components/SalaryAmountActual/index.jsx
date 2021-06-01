import React from "react";
import "./SalaryAmountActual.css";

function SalaryAmountActual(props) {
  const { salaryamountactualnu, price, className } = props;

  return (
    <div className={`salary-amount-actual ${className || ""}`}>
      <div className="overlap-group1-1">
        <div className="salary-amount-actual-nu valign-text-middle mulish-regular-normal-black-14px">
          {salaryamountactualnu}
        </div>
        <div className="price-2 valign-text-middle mulish-regular-normal-black-14px">{price}</div>
      </div>
    </div>
  );
}

export default SalaryAmountActual;
