import React from "react";
import LightLogoLeft5LinksCenterAvatar2Ico from "../LightLogoLeft5LinksCenterAvatar2Ico";
import PayperiodCurrent from "../PayperiodCurrent";
import Footer from "../Footer";
import "./Desktop1.css";

function Desktop1(props) {
  const {
    lightLogoLeft5LinksCenterAvatar2Ico,
    payperiodCurrentProps,
    payperiodCurrent2Props,
    payperiodCurrent3Props,
    footerProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="desktop-1 screen">
        <LightLogoLeft5LinksCenterAvatar2Ico
          companyLogoProps={lightLogoLeft5LinksCenterAvatar2Ico.companyLogoProps}
          linksProps={lightLogoLeft5LinksCenterAvatar2Ico.linksProps}
          iconOutlinedActionNotificationNotif={lightLogoLeft5LinksCenterAvatar2Ico.iconOutlinedActionNotificationNotif}
          iconOutlinedActionMainSettingsProps={lightLogoLeft5LinksCenterAvatar2Ico.iconOutlinedActionMainSettingsProps}
          avatarProps={lightLogoLeft5LinksCenterAvatar2Ico.avatarProps}
        />
        <div className="flex-row">
          <PayperiodCurrent
            dailySpendProps={payperiodCurrentProps.dailySpendProps}
            headingProps={payperiodCurrentProps.headingProps}
            revenueProps={payperiodCurrentProps.revenueProps}
            expensesProps={payperiodCurrentProps.expensesProps}
            remainderProps={payperiodCurrentProps.remainderProps}
            remainder2Props={payperiodCurrentProps.remainder2Props}
          />
          <PayperiodCurrent
            dailySpendProps={payperiodCurrent2Props.dailySpendProps}
            headingProps={payperiodCurrent2Props.headingProps}
            revenueProps={payperiodCurrent2Props.revenueProps}
            expensesProps={payperiodCurrent2Props.expensesProps}
            remainderProps={payperiodCurrent2Props.remainderProps}
            remainder2Props={payperiodCurrent2Props.remainder2Props}
            className="payperiod-current-1"
          />
          <PayperiodCurrent
            dailySpendProps={payperiodCurrent3Props.dailySpendProps}
            headingProps={payperiodCurrent3Props.headingProps}
            revenueProps={payperiodCurrent3Props.revenueProps}
            expensesProps={payperiodCurrent3Props.expensesProps}
            remainderProps={payperiodCurrent3Props.remainderProps}
            remainder2Props={payperiodCurrent3Props.remainder2Props}
            className="payperiod-current-1"
          />
        </div>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default Desktop1;
