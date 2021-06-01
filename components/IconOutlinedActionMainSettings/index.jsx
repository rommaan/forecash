import React from "react";
import "./IconOutlinedActionMainSettings.css";

function IconOutlinedActionMainSettings(props) {
  const { vector2 } = props;

  return (
    <div className="icon-outlined-a-n-main-settings">
      <div className="overlap-group">
        <img
          className="vector-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-7@2x.png"
        />
        <img className="vector-2" src={vector2} />
      </div>
    </div>
  );
}

export default IconOutlinedActionMainSettings;
