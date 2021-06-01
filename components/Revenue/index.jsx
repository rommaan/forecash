import React from "react";
import Salary from "../Salary";
import JunkSales from "../JunkSales";
import "./Revenue.css";

function Revenue(props) {
  const { text10, salaryProps, junkSalesProps, junkSales2Props } = props;

  return (
    <div className="revenue border-1px-black">
      <div className="text-21 valign-text-middle mulish-semi-bold-black-18px">{text10}</div>
      <Salary
        text11={salaryProps.text11}
        salaryAmountBudgetedProps={salaryProps.salaryAmountBudgetedProps}
        salaryAmountActualProps={salaryProps.salaryAmountActualProps}
        salaryAmountBudgeted2Props={salaryProps.salaryAmountBudgeted2Props}
      />
      <JunkSales
        text12={junkSalesProps.text12}
        junkSalesAmountBudgetedProps={junkSalesProps.junkSalesAmountBudgetedProps}
        salaryAmountActualProps={junkSalesProps.salaryAmountActualProps}
        salaryAmountBudgetedProps={junkSalesProps.salaryAmountBudgetedProps}
      />
      <JunkSales
        text12={junkSales2Props.text12}
        junkSalesAmountBudgetedProps={junkSales2Props.junkSalesAmountBudgetedProps}
        salaryAmountActualProps={junkSales2Props.salaryAmountActualProps}
        salaryAmountBudgetedProps={junkSales2Props.salaryAmountBudgetedProps}
        className="refunds"
      />
    </div>
  );
}

export default Revenue;
