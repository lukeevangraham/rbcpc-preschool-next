import React from "react";
import Button from "../../UI/Button/Button";

import classes from "./HomeInfo.module.css";

const HomeInfo = (props) => {
  // let attachedClasses = [classes.homeHero]
  return (
    <div className={classes.HomeInfo}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "white" }}
        ></path>
      </svg>
      <section className={classes.content}>
        <div className="row">
          <h2>A preschool with a big heart</h2>
          <p className={classes.longCopy}>
            Hello, we're RBCPC Preschool in San Diego. Your child is unique. We
            celebrate that. We love helping children like yours grow
            academically, socially and spiritually.
            <br />
          </p>
          <div className={classes.videoButton}>
            <Button
              btnType="ghost"
              clicked={() =>
                window.open("https://vimeo.com/308476600", "_blank")
              }
            >
              Check out a video of our school
            </Button>
          </div>
          <div className="row section group">
            <div className="col span_3_of_12 box">
              <span className="icon-big">
              <i className="ion-map"></i>
              </span>
              <h3>Program Info</h3>
              <p>
                Read about our programs and see what options we have available
                for your child!
              </p>
            </div>
            <div className="col span_3_of_12 box">
              <span className="icon-big">
              <i className="ion-heart"></i>
              </span>
              <h3>Our Philosophy</h3>
              <p>
                Read about our philosophy and our aproach towards education. We
                value and include everyone who comes through our gates.
              </p>
            </div>
            <div className="col span_3_of_12 box">
              <span className="icon-big">
              <i className="ion-ios-people"></i>
              </span>
              <h3>Our Staff</h3>
              <p>Meet our caring, wonderful staff.</p>
            </div>
            <div className="col span_3_of_12 box">
              <span className="icon-big">
              <i className="ion-social-facebook"></i>
              </span>
              <h3>Facebook</h3>
              <p>
                Keep up-to-date and join us on Facebook! We're always adding
                something, so like us and stay connected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeInfo;
