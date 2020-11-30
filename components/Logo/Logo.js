import React from "react";
import classes from "./Logo.module.css";
import Link from "next/link";

const Logo = (props) => (
  <div className={classes.Logo}>
    <Link href="/">
      <a>
        <img src="/images/preschool-logo.png" alt="" />
      </a>
    </Link>
  </div>
);

export default Logo;
