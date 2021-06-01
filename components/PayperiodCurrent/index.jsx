import React from "react";
import DailySpend from "../DailySpend";
import Heading from "../Heading";
import Revenue from "../Revenue";
import Expenses from "../Expenses";
import Remainder from "../Remainder";
import "./PayperiodCurrent.css";

function PayperiodCurrent(props) {
  const {
    dailySpendProps,
    headingProps,
    revenueProps,
    expensesProps,
    remainderProps,
    remainder2Props,
    className,
  } = props;

  return (
    <div className={`payperiod-current border-1px-black ${className || ""}`}>
      <DailySpend
        name={dailySpendProps.name}
        price={dailySpendProps.price}
        dailyspendamountI33={dailySpendProps.dailyspendamountI33}
      />
      <Heading
        text9={headingProps.text9}
        text8={headingProps.text8}
        text7={headingProps.text7}
        text6={headingProps.text6}
      />
      <Revenue
        text10={revenueProps.text10}
        salaryProps={revenueProps.salaryProps}
        junkSalesProps={revenueProps.junkSalesProps}
        junkSales2Props={revenueProps.junkSales2Props}
      />
      <Expenses
        text14={expensesProps.text14}
        autopayProps={expensesProps.autopayProps}
        autopay2Props={expensesProps.autopay2Props}
        autopay3Props={expensesProps.autopay3Props}
        autopay4Props={expensesProps.autopay4Props}
      />
      <Remainder text19={remainderProps.text19} autopayProps={remainderProps.autopayProps} />
      <Remainder text19={remainder2Props.text19} autopayProps={remainder2Props.autopayProps} />
    </div>
  );
}

export default PayperiodCurrent;
