import React from "react";
import Autopay from "../Autopay";
import "./Expenses.css";

function Expenses(props) {
  const { text14, autopayProps, autopay2Props, autopay3Props, autopay4Props } = props;

  return (
    <div className="expenses border-1px-black">
      <div className="text-25 valign-text-middle mulish-semi-bold-black-18px">{text14}</div>
      <Autopay
        text15={autopayProps.text15}
        autopayAmountBudgetedProps={autopayProps.autopayAmountBudgetedProps}
        autopayAmountActualProps={autopayProps.autopayAmountActualProps}
        autopayAmountBudgeted2Props={autopayProps.autopayAmountBudgeted2Props}
      />
      <Autopay
        text15={autopay2Props.text15}
        autopayAmountBudgetedProps={autopay2Props.autopayAmountBudgetedProps}
        autopayAmountActualProps={autopay2Props.autopayAmountActualProps}
        autopayAmountBudgeted2Props={autopay2Props.autopayAmountBudgeted2Props}
        className="periodic-payments"
      />
      <Autopay
        text15={autopay3Props.text15}
        autopayAmountBudgetedProps={autopay3Props.autopayAmountBudgetedProps}
        autopayAmountActualProps={autopay3Props.autopayAmountActualProps}
        autopayAmountBudgeted2Props={autopay3Props.autopayAmountBudgeted2Props}
        className="variable-spending"
      />
      <Autopay
        text15={autopay4Props.text15}
        autopayAmountBudgetedProps={autopay4Props.autopayAmountBudgetedProps}
        autopayAmountActualProps={autopay4Props.autopayAmountActualProps}
        autopayAmountBudgeted2Props={autopay4Props.autopayAmountBudgeted2Props}
        className="fees"
      />
    </div>
  );
}

export default Expenses;
