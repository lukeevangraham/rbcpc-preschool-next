import React from "react";

import classes from "./HomePhoto.module.css";

const HomePhoto = (props) => (
  <li>
    <figure className={classes.mealPhoto}>
      <img src={props.src} alt={props.alt} />
    </figure>
  </li>
);

export default HomePhoto;
