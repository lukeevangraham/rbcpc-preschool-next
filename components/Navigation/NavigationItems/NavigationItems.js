import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">About Us</NavigationItem>
    <NavigationItem link="/hello">Programs</NavigationItem>
    <NavigationItem link="/hello">Tuition</NavigationItem>
    <NavigationItem link="/hello">Parents</NavigationItem>
    <NavigationItem link="/hello">Special Events</NavigationItem>
  </ul>
);

export default navigationItems;
