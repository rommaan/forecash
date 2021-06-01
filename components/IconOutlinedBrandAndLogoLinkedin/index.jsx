import React from "react";
import "./IconOutlinedBrandAndLogoLinkedin.css";

function IconOutlinedBrandAndLogoLinkedin(props) {
  const { vector2, vector3 } = props;

  return (
    <div className="icon-outlined-b-d-logo-linkedin">
      <img
        className="vector-10"
        src="https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-4@2x.png"
      />
      <div className="flex-row-1">
        <img className="vector-8" src={vector2} />
        <img className="vector-9" src={vector3} />
      </div>
    </div>
  );
}

export default IconOutlinedBrandAndLogoLinkedin;
