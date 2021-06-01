import React from "react";
import "./IconOutlinedActionNotificationNotif.css";

function IconOutlinedActionNotificationNotif(props) {
  const { vector2 } = props;

  return (
    <div className="icon-outlined-a-notification-on">
      <img
        className="vector-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/60a1cdcf229b61dce7edfdae/releases/60a1f808d48b72ccbdb3a306/img/vector-5@2x.png"
      />
      <img className="vector" src={vector2} />
    </div>
  );
}

export default IconOutlinedActionNotificationNotif;
