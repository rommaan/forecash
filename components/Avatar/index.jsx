import React from "react";
import IconOutlinedOtherPersonUser from "../IconOutlinedOtherPersonUser";
import "./Avatar.css";

function Avatar(props) {
  const { iconOutlinedOtherPersonUserProps } = props;

  return (
    <div className="avatar">
      <IconOutlinedOtherPersonUser vector2={iconOutlinedOtherPersonUserProps.vector2} />
    </div>
  );
}

export default Avatar;
