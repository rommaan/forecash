import React from "react";
import CompanyLogo from "../CompanyLogo";
import Links from "../Links";
import IconOutlinedActionNotificationNotif from "../IconOutlinedActionNotificationNotif";
import IconOutlinedActionMainSettings from "../IconOutlinedActionMainSettings";
import Avatar from "../Avatar";
import "./LightLogoLeft5LinksCenterAvatar2Ico.css";

function LightLogoLeft5LinksCenterAvatar2Ico(props) {
  const {
    companyLogoProps,
    linksProps,
    iconOutlinedActionNotificationNotif,
    iconOutlinedActionMainSettingsProps,
    avatarProps,
  } = props;

  return (
    <div className="light-logo-left-r-2-icons-right">
      <div className="overlap-group3">
        <CompanyLogo text51={companyLogoProps.text51} i5146650531={companyLogoProps.i5146650531} />
        <Links
          text47={linksProps.text47}
          text48={linksProps.text48}
          text49={linksProps.text49}
          text50={linksProps.text50}
          aboutI505324146={linksProps.aboutI505324146}
        />
        <IconOutlinedActionNotificationNotif vector2={iconOutlinedActionNotificationNotif.vector2} />
        <IconOutlinedActionMainSettings vector2={iconOutlinedActionMainSettingsProps.vector2} />
        <Avatar iconOutlinedOtherPersonUserProps={avatarProps.iconOutlinedOtherPersonUserProps} />
      </div>
    </div>
  );
}

export default LightLogoLeft5LinksCenterAvatar2Ico;
