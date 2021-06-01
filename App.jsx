import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop1 from "./components/Desktop1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-1)">
          <Desktop1
            lightLogoLeft5LinksCenterAvatar2Ico={desktop1Data.lightLogoLeft5LinksCenterAvatar2Ico}
            payperiodCurrentProps={desktop1Data.payperiodCurrentProps}
            payperiodCurrent2Props={desktop1Data.payperiodCurrent2Props}
            payperiodCurrent3Props={desktop1Data.payperiodCurrent3Props}
            footerProps={desktop1Data.footerProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const companyLogoData = {
    text51: "FORECASH",
    i5146650531: "💰",
};

const linksData = {
    text47: "Budget",
    text48: "Expenses",
    text49: "Preferences",
    text50: "Advice",
    aboutI505324146: "About",
};

const iconOutlinedActionNotificationNotifData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-6@2x.png",
};

const iconOutlinedActionMainSettingsData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-8@2x.png",
};

const iconOutlinedOtherPersonUserData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-9@2x.png",
};

const avatarData = {
    iconOutlinedOtherPersonUserProps: iconOutlinedOtherPersonUserData,
};

const lightLogoLeft5LinksCenterAvatar2IcoData = {
    companyLogoProps: companyLogoData,
    linksProps: linksData,
    iconOutlinedActionNotificationNotif: iconOutlinedActionNotificationNotifData,
    iconOutlinedActionMainSettingsProps: iconOutlinedActionMainSettingsData,
    avatarProps: avatarData,
};

const dailySpendData = {
    name: "Cash available daily:",
    price: "$",
    dailyspendamountI33: "250.00",
};

const headingData = {
    text9: "Payday Date",
    text8: "Budgeted",
    text7: "Actual",
    text6: "Difference",
};

const salaryAmountBudgetedData = {
    salaryamountbudgeted: "10,000.00",
    price: "$",
};

const salaryAmountActualData = {
    salaryamountactualnu: "10,000.00",
    price: "$",
};

const salaryAmountBudgeted2Data = {
    salaryamountbudgeted: "0.00",
    price: "$",
};

const salaryData = {
    text11: "Salary",
    salaryAmountBudgetedProps: salaryAmountBudgetedData,
    salaryAmountActualProps: salaryAmountActualData,
    salaryAmountBudgeted2Props: salaryAmountBudgeted2Data,
};

const junkSalesAmountBudgetedData = {
    price: "$",
    junksalesamountbudge: "10,000.00",
};

const salaryAmountActual2Data = {
    salaryamountactualnu: "10,000.00",
    price: "$",
};

const salaryAmountBudgeted3Data = {
    salaryamountbudgeted: "0.00",
    price: "$",
};

const junkSalesData = {
    text12: "Junk Sales",
    junkSalesAmountBudgetedProps: junkSalesAmountBudgetedData,
    salaryAmountActualProps: salaryAmountActual2Data,
    salaryAmountBudgetedProps: salaryAmountBudgeted3Data,
};

const junkSalesAmountBudgeted2Data = {
    price: "$",
    junksalesamountbudge: "10,000.00",
};

const salaryAmountActual3Data = {
    salaryamountactualnu: "10,000.00",
    price: "$",
};

const salaryAmountBudgeted4Data = {
    salaryamountbudgeted: "0.00",
    price: "$",
};

const junkSales2Data = {
    text12: "Refunds",
    junkSalesAmountBudgetedProps: junkSalesAmountBudgeted2Data,
    salaryAmountActualProps: salaryAmountActual3Data,
    salaryAmountBudgetedProps: salaryAmountBudgeted4Data,
};

const revenueData = {
    text10: "Revenue",
    salaryProps: salaryData,
    junkSalesProps: junkSalesData,
    junkSales2Props: junkSales2Data,
};

const autopayAmountBudgetedData = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActualData = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted2Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopayData = {
    text15: "Autopay",
    autopayAmountBudgetedProps: autopayAmountBudgetedData,
    autopayAmountActualProps: autopayAmountActualData,
    autopayAmountBudgeted2Props: autopayAmountBudgeted2Data,
};

const autopayAmountBudgeted3Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual2Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted4Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay2Data = {
    text15: "Periodic Payments",
    autopayAmountBudgetedProps: autopayAmountBudgeted3Data,
    autopayAmountActualProps: autopayAmountActual2Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted4Data,
};

const autopayAmountBudgeted5Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual3Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted6Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay3Data = {
    text15: "Variable Spending",
    autopayAmountBudgetedProps: autopayAmountBudgeted5Data,
    autopayAmountActualProps: autopayAmountActual3Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted6Data,
};

const autopayAmountBudgeted7Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual4Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted8Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay4Data = {
    text15: "Fees",
    autopayAmountBudgetedProps: autopayAmountBudgeted7Data,
    autopayAmountActualProps: autopayAmountActual4Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted8Data,
};

const expensesData = {
    text14: "Expenses",
    autopayProps: autopayData,
    autopay2Props: autopay2Data,
    autopay3Props: autopay3Data,
    autopay4Props: autopay4Data,
};

const autopayAmountBudgeted9Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual5Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted10Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay5Data = {
    text15: "Remaining Amount",
    autopayAmountBudgetedProps: autopayAmountBudgeted9Data,
    autopayAmountActualProps: autopayAmountActual5Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted10Data,
};

const remainderData = {
    text19: "Remainder",
    autopayProps: autopay5Data,
};

const autopayAmountBudgeted11Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual6Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted12Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay6Data = {
    text15: "Savings Amount",
    autopayAmountBudgetedProps: autopayAmountBudgeted11Data,
    autopayAmountActualProps: autopayAmountActual6Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted12Data,
};

const remainder2Data = {
    text19: "Savings",
    autopayProps: autopay6Data,
};

const payperiodCurrentData = {
    dailySpendProps: dailySpendData,
    headingProps: headingData,
    revenueProps: revenueData,
    expensesProps: expensesData,
    remainderProps: remainderData,
    remainder2Props: remainder2Data,
};

const dailySpend2Data = {
    name: "Cash available daily:",
    price: "$",
    dailyspendamountI33: "250.00",
};

const heading2Data = {
    text9: "Payday Date",
    text8: "Budgeted",
    text7: "Actual",
    text6: "Difference",
};

const salaryAmountBudgeted5Data = {
    salaryamountbudgeted: "10,000.00",
    price: "$",
};

const salaryAmountActual4Data = {
    salaryamountactualnu: "10,000.00",
    price: "$",
};

const salaryAmountBudgeted6Data = {
    salaryamountbudgeted: "0.00",
    price: "$",
};

const salary2Data = {
    text11: "Salary",
    salaryAmountBudgetedProps: salaryAmountBudgeted5Data,
    salaryAmountActualProps: salaryAmountActual4Data,
    salaryAmountBudgeted2Props: salaryAmountBudgeted6Data,
};

const junkSalesAmountBudgeted3Data = {
    price: "$",
    junksalesamountbudge: "10,000.00",
};

const salaryAmountActual5Data = {
    salaryamountactualnu: "10,000.00",
    price: "$",
};

const salaryAmountBudgeted7Data = {
    salaryamountbudgeted: "0.00",
    price: "$",
};

const junkSales3Data = {
    text12: "Junk Sales",
    junkSalesAmountBudgetedProps: junkSalesAmountBudgeted3Data,
    salaryAmountActualProps: salaryAmountActual5Data,
    salaryAmountBudgetedProps: salaryAmountBudgeted7Data,
};

const junkSalesAmountBudgeted4Data = {
    price: "$",
    junksalesamountbudge: "10,000.00",
};

const salaryAmountActual6Data = {
    salaryamountactualnu: "10,000.00",
    price: "$",
};

const salaryAmountBudgeted8Data = {
    salaryamountbudgeted: "0.00",
    price: "$",
};

const junkSales4Data = {
    text12: "Refunds",
    junkSalesAmountBudgetedProps: junkSalesAmountBudgeted4Data,
    salaryAmountActualProps: salaryAmountActual6Data,
    salaryAmountBudgetedProps: salaryAmountBudgeted8Data,
};

const revenue2Data = {
    text10: "Revenue",
    salaryProps: salary2Data,
    junkSalesProps: junkSales3Data,
    junkSales2Props: junkSales4Data,
};

const autopayAmountBudgeted13Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual7Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted14Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay7Data = {
    text15: "Autopay",
    autopayAmountBudgetedProps: autopayAmountBudgeted13Data,
    autopayAmountActualProps: autopayAmountActual7Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted14Data,
};

const autopayAmountBudgeted15Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual8Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted16Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay8Data = {
    text15: "Periodic Payments",
    autopayAmountBudgetedProps: autopayAmountBudgeted15Data,
    autopayAmountActualProps: autopayAmountActual8Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted16Data,
};

const autopayAmountBudgeted17Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual9Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted18Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay9Data = {
    text15: "Variable Spending",
    autopayAmountBudgetedProps: autopayAmountBudgeted17Data,
    autopayAmountActualProps: autopayAmountActual9Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted18Data,
};

const autopayAmountBudgeted19Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual10Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted20Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay10Data = {
    text15: "Fees",
    autopayAmountBudgetedProps: autopayAmountBudgeted19Data,
    autopayAmountActualProps: autopayAmountActual10Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted20Data,
};

const expenses2Data = {
    text14: "Expenses",
    autopayProps: autopay7Data,
    autopay2Props: autopay8Data,
    autopay3Props: autopay9Data,
    autopay4Props: autopay10Data,
};

const autopayAmountBudgeted21Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual11Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted22Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay11Data = {
    text15: "Remaining Amount",
    autopayAmountBudgetedProps: autopayAmountBudgeted21Data,
    autopayAmountActualProps: autopayAmountActual11Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted22Data,
};

const remainder3Data = {
    text19: "Remainder",
    autopayProps: autopay11Data,
};

const autopayAmountBudgeted23Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual12Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted24Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay12Data = {
    text15: "Savings Amount",
    autopayAmountBudgetedProps: autopayAmountBudgeted23Data,
    autopayAmountActualProps: autopayAmountActual12Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted24Data,
};

const remainder4Data = {
    text19: "Savings",
    autopayProps: autopay12Data,
};

const payperiodCurrent2Data = {
    dailySpendProps: dailySpend2Data,
    headingProps: heading2Data,
    revenueProps: revenue2Data,
    expensesProps: expenses2Data,
    remainderProps: remainder3Data,
    remainder2Props: remainder4Data,
};

const dailySpend3Data = {
    name: "Cash available daily:",
    price: "$",
    dailyspendamountI33: "250.00",
};

const heading3Data = {
    text9: "Payday Date",
    text8: "Budgeted",
    text7: "Actual",
    text6: "Difference",
};

const salaryAmountBudgeted9Data = {
    salaryamountbudgeted: "10,000.00",
    price: "$",
};

const salaryAmountActual7Data = {
    salaryamountactualnu: "10,000.00",
    price: "$",
};

const salaryAmountBudgeted10Data = {
    salaryamountbudgeted: "0.00",
    price: "$",
};

const salary3Data = {
    text11: "Salary",
    salaryAmountBudgetedProps: salaryAmountBudgeted9Data,
    salaryAmountActualProps: salaryAmountActual7Data,
    salaryAmountBudgeted2Props: salaryAmountBudgeted10Data,
};

const junkSalesAmountBudgeted5Data = {
    price: "$",
    junksalesamountbudge: "10,000.00",
};

const salaryAmountActual8Data = {
    salaryamountactualnu: "10,000.00",
    price: "$",
};

const salaryAmountBudgeted11Data = {
    salaryamountbudgeted: "0.00",
    price: "$",
};

const junkSales5Data = {
    text12: "Junk Sales",
    junkSalesAmountBudgetedProps: junkSalesAmountBudgeted5Data,
    salaryAmountActualProps: salaryAmountActual8Data,
    salaryAmountBudgetedProps: salaryAmountBudgeted11Data,
};

const junkSalesAmountBudgeted6Data = {
    price: "$",
    junksalesamountbudge: "10,000.00",
};

const salaryAmountActual9Data = {
    salaryamountactualnu: "10,000.00",
    price: "$",
};

const salaryAmountBudgeted12Data = {
    salaryamountbudgeted: "0.00",
    price: "$",
};

const junkSales6Data = {
    text12: "Refunds",
    junkSalesAmountBudgetedProps: junkSalesAmountBudgeted6Data,
    salaryAmountActualProps: salaryAmountActual9Data,
    salaryAmountBudgetedProps: salaryAmountBudgeted12Data,
};

const revenue3Data = {
    text10: "Revenue",
    salaryProps: salary3Data,
    junkSalesProps: junkSales5Data,
    junkSales2Props: junkSales6Data,
};

const autopayAmountBudgeted25Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual13Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted26Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay13Data = {
    text15: "Autopay",
    autopayAmountBudgetedProps: autopayAmountBudgeted25Data,
    autopayAmountActualProps: autopayAmountActual13Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted26Data,
};

const autopayAmountBudgeted27Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual14Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted28Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay14Data = {
    text15: "Periodic Payments",
    autopayAmountBudgetedProps: autopayAmountBudgeted27Data,
    autopayAmountActualProps: autopayAmountActual14Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted28Data,
};

const autopayAmountBudgeted29Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual15Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted30Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay15Data = {
    text15: "Variable Spending",
    autopayAmountBudgetedProps: autopayAmountBudgeted29Data,
    autopayAmountActualProps: autopayAmountActual15Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted30Data,
};

const autopayAmountBudgeted31Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual16Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted32Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay16Data = {
    text15: "Fees",
    autopayAmountBudgetedProps: autopayAmountBudgeted31Data,
    autopayAmountActualProps: autopayAmountActual16Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted32Data,
};

const expenses3Data = {
    text14: "Expenses",
    autopayProps: autopay13Data,
    autopay2Props: autopay14Data,
    autopay3Props: autopay15Data,
    autopay4Props: autopay16Data,
};

const autopayAmountBudgeted33Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual17Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted34Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay17Data = {
    text15: "Remaining Amount",
    autopayAmountBudgetedProps: autopayAmountBudgeted33Data,
    autopayAmountActualProps: autopayAmountActual17Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted34Data,
};

const remainder5Data = {
    text19: "Remainder",
    autopayProps: autopay17Data,
};

const autopayAmountBudgeted35Data = {
    autopayamountbudgete: "10,000.00",
    price: "$",
};

const autopayAmountActual18Data = {
    autopayamountactualn: "10,000.00",
    price: "$",
};

const autopayAmountBudgeted36Data = {
    autopayamountbudgete: "0.00",
    price: "$",
};

const autopay18Data = {
    text15: "Savings Amount",
    autopayAmountBudgetedProps: autopayAmountBudgeted35Data,
    autopayAmountActualProps: autopayAmountActual18Data,
    autopayAmountBudgeted2Props: autopayAmountBudgeted36Data,
};

const remainder6Data = {
    text19: "Savings",
    autopayProps: autopay18Data,
};

const payperiodCurrent3Data = {
    dailySpendProps: dailySpend3Data,
    headingProps: heading3Data,
    revenueProps: revenue3Data,
    expensesProps: expenses3Data,
    remainderProps: remainder5Data,
    remainder2Props: remainder6Data,
};

const iconOutlinedBrandAndLogoFacebookData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector@2x.png",
};

const iconOutlinedBrandAndLogoTwitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-1@2x.png",
};

const iconOutlinedBrandAndLogoLinkedinData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-3@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-2@2x.png",
};

const footerData = {
    text1: "FORECASH",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    place: "Legal",
    icon: "https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1cddb5dfda273535b8ea0/img/icon@2x.png",
    iconOutlinedBrandAndLogoFacebookPro: iconOutlinedBrandAndLogoFacebookData,
    iconOutlinedBrandAndLogoTwitterProp: iconOutlinedBrandAndLogoTwitterData,
    iconOutlinedBrandAndLogoLinkedinPro: iconOutlinedBrandAndLogoLinkedinData,
};

const desktop1Data = {
    lightLogoLeft5LinksCenterAvatar2Ico: lightLogoLeft5LinksCenterAvatar2IcoData,
    payperiodCurrentProps: payperiodCurrentData,
    payperiodCurrent2Props: payperiodCurrent2Data,
    payperiodCurrent3Props: payperiodCurrent3Data,
    footerProps: footerData,
};

