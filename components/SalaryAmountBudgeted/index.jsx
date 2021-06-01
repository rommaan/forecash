import React from "react";
import "./SalaryAmountBudgeted.css";

function SalaryAmountBudgeted(props) {
  const { salaryamountbudgeted, price, className } = props;

  return (
    <div className={`salary-amount-budgeted ${className || ""}`}>
      <div className="overlap-group2">
        <div className="salary-amount-budgeted-1 valign-text-middle mulish-semi-bold-black-14px">
          {salaryamountbudgeted}
        </div>
        <div className="price-1 valign-text-middle mulish-semi-bold-black-14px">{price}</div>
      </div>
    </div>
  );
}

export default SalaryAmountBudgeted;
