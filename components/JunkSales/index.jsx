import React from "react";
import JunkSalesAmountBudgeted from "../JunkSalesAmountBudgeted";
import SalaryAmountActual from "../SalaryAmountActual";
import SalaryAmountBudgeted from "../SalaryAmountBudgeted";
import "./JunkSales.css";

function JunkSales(props) {
  const { text12, junkSalesAmountBudgetedProps, salaryAmountActualProps, salaryAmountBudgetedProps, className } = props;

  return (
    <div className={`junk-sales ${className || ""}`}>
      <div className="text-23 valign-text-middle mulish-semi-bold-black-14px">{text12}</div>
      <JunkSalesAmountBudgeted
        price={junkSalesAmountBudgetedProps.price}
        junksalesamountbudge={junkSalesAmountBudgetedProps.junksalesamountbudge}
      />
      <SalaryAmountActual
        salaryamountactualnu={salaryAmountActualProps.salaryamountactualnu}
        price={salaryAmountActualProps.price}
        className="junk-sales-amount-actual"
      />
      <SalaryAmountBudgeted
        salaryamountbudgeted={salaryAmountBudgetedProps.salaryamountbudgeted}
        price={salaryAmountBudgetedProps.price}
        className="junk-sales-amount-difference"
      />
    </div>
  );
}

export default JunkSales;
