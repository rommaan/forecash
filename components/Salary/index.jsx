import React from "react";
import SalaryAmountBudgeted from "../SalaryAmountBudgeted";
import SalaryAmountActual from "../SalaryAmountActual";
import "./Salary.css";

function Salary(props) {
  const { text11, salaryAmountBudgetedProps, salaryAmountActualProps, salaryAmountBudgeted2Props, className } = props;

  return (
    <div className={`salary ${className || ""}`}>
      <div className="text-22 valign-text-middle mulish-semi-bold-black-14px">{text11}</div>
      <SalaryAmountBudgeted
        salaryamountbudgeted={salaryAmountBudgetedProps.salaryamountbudgeted}
        price={salaryAmountBudgetedProps.price}
      />
      <SalaryAmountActual
        salaryamountactualnu={salaryAmountActualProps.salaryamountactualnu}
        price={salaryAmountActualProps.price}
      />
      <SalaryAmountBudgeted
        salaryamountbudgeted={salaryAmountBudgeted2Props.salaryamountbudgeted}
        price={salaryAmountBudgeted2Props.price}
        className="salary-amount-difference"
      />
    </div>
  );
}

export default Salary;
