import React from "react";
import IconOutlinedBrandAndLogoFacebook from "../IconOutlinedBrandAndLogoFacebook";
import IconOutlinedBrandAndLogoTwitter from "../IconOutlinedBrandAndLogoTwitter";
import IconOutlinedBrandAndLogoLinkedin from "../IconOutlinedBrandAndLogoLinkedin";
import "./Footer.css";

function Footer(props) {
  const {
    text1,
    privacyPolicy,
    termsOfService,
    place,
    icon,
    iconOutlinedBrandAndLogoFacebookPro,
    iconOutlinedBrandAndLogoTwitterProp,
    iconOutlinedBrandAndLogoLinkedinPro,
  } = props;

  return (
    <div className="footer">
      <div className="text-1-1 valign-text-middle">{text1}</div>
      <div className="privacy-policy valign-text-middle mulish-semi-bold-white-14px">{privacyPolicy}</div>
      <div className="terms-of-service valign-text-middle mulish-semi-bold-white-14px">{termsOfService}</div>
      <div className="place valign-text-middle mulish-semi-bold-white-14px">{place}</div>
      <IconOutlinedBrandAndLogoFacebook src={iconOutlinedBrandAndLogoFacebookPro.src} />
      <IconOutlinedBrandAndLogoTwitter src={iconOutlinedBrandAndLogoTwitterProp.src} />
      <IconOutlinedBrandAndLogoLinkedin
        vector2={iconOutlinedBrandAndLogoLinkedinPro.vector2}
        vector3={iconOutlinedBrandAndLogoLinkedinPro.vector3}
      />
      <img className="icon" src={icon} />
    </div>
  );
}

export default Footer;
