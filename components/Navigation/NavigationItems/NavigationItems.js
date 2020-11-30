import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/about">About Us</NavigationItem>
    <NavigationItem link="/programs">Programs</NavigationItem>
    <NavigationItem link="/tuition">Tuition</NavigationItem>
    <NavigationItem link="/parents">Parents</NavigationItem>
    <NavigationItem link="/events">Special Events</NavigationItem>
  </ul>
);

export default navigationItems;
