import React from "react";

import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  let attachedClasses = [classes.DrawerToggle];

  console.log("STICKY: ", props.sticky)

  props.sticky
    ? attachedClasses.push(classes.Sticky)
    : null;

  return (
    <div className={attachedClasses.join(" ")} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
