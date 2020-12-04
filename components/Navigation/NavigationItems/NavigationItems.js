import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem sticky={props.sticky} link="/about">About Us</NavigationItem>
    <NavigationItem sticky={props.sticky} link="/programs">Programs</NavigationItem>
    <NavigationItem sticky={props.sticky} link="/tuition">Tuition</NavigationItem>
    <NavigationItem sticky={props.sticky} link="/parents">Parents</NavigationItem>
    <NavigationItem sticky={props.sticky} link="/events">Special Events</NavigationItem>
  </ul>
);

export default navigationItems;
