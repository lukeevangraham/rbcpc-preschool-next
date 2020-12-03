import React from "react";
import Link from "next/link";

import classes from "./Footer.module.css";

let attachedFbClasses = ["ion-social-facebook", classes.ionSocialFacebook]
let attachedIgClasses = ["ion-social-instagram", classes.ionSocialInstagram]

const Footer = (props) => (

  <footer className={classes.footer}>
    <div className="row">
      <div className="col span_6_of_12">
        <ul className={classes.footerNav}>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col span_6_of_12">
        <ul className={classes.socialLinks}>
          <li>
            <a
              href="https://www.facebook.com/rbcpcpreschool"
              target="_blank"
            >
              <i className={attachedFbClasses.join(" ")}></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rbcpcpreschool/" target="_blank">
              <i className={attachedIgClasses.join(" ")}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <p className={classes.footerP}>
        Copyright &copy; {new Date().getFullYear()} by RBCPC Preschool. All
        rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
