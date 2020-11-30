import React from "react";

import classes from "./Button.module.css";

const button = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.btn, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;