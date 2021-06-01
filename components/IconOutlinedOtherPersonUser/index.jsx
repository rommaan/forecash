import React from "react";
import "./IconOutlinedOtherPersonUser.css";

function IconOutlinedOtherPersonUser(props) {
  const { vector2 } = props;

  return (
    <div className="icon-outlined-o-her-person-user">
      <img
        className="vector-4"
        src="https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-10@2x.png"
      />
      <img className="vector-5" src={vector2} />
    </div>
  );
}

export default IconOutlinedOtherPersonUser;
