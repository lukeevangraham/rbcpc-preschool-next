import React, { useState } from "react";

import classes from "./Layout.module.css";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import HomeHero from "../../components/Home/HomeHero/HomeHero"
import Footer from "../../components/Footer/Footer"

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };
  return (
    <Aux>
      {props.home ? (
        <React.Fragment>
          <div className={classes.homeHeader}>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <HomeHero />
          </div>
        </React.Fragment>
      ) : (
        <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      )}

      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>{props.children}</main>
      <Footer />
    </Aux>
  );
};

export default Layout;
