import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Preschool</NavigationItem>
    <NavigationItem link="/hello">Hello</NavigationItem>
  </ul>
);

export default navigationItems;
