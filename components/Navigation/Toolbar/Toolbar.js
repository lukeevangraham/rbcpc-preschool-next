import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const Toolbar = (props) => {
  let attachedClasses = [classes.innerToolbar, "row"];
  return (
    <header className={props.sticky ? classes.Sticky : classes.Toolbar}>
      {console.log("STICKY: ", props.sticky)}
      <div className={attachedClasses.join(" ")}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </div>
    </header>
  );
};

export default Toolbar;
