import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

import classes from "./Layout.module.css";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import HomeHero from "../../components/Home/HomeHero/HomeHero";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [makeNavSticky, setMakeNavSticky] = useState(false);

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
          <Waypoint
            topOffset={"120px"}
            onLeave={() => setMakeNavSticky(true)}
            onEnter={() => setMakeNavSticky(false)}
          >
            <div className={classes.homeHeader}>
              <Toolbar
                sticky={makeNavSticky}
                drawerToggleClicked={sideDrawerToggleHandler}
              />
              <HomeHero />
            </div>
          </Waypoint>
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
