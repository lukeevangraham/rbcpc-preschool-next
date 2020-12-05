import React from "react";

import classes from "./HomeDetails.module.css";

const HomeDetails = (props) => {
  let attachedClasses = ["row", classes.homeDetails];
  return (
    <section className={classes.homeDetails}>
      <div className="row">
        <div className="section group">
          <div className="col span_6_of_12">
            <div className={classes.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.3682855140396!2d-117.06398604851846!3d33.02042647874616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf0db57f865cd%3A0x742484705eb26e6d!2sRBCPC%20Preschool!5e0!3m2!1sen!2sus!4v1607038621209!5m2!1sen!2sus"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <div className="col span_6_of_12">
            <h2>Preschool Office Hours</h2>
            <div className={classes.hours}>
              <div className={classes.hoursInner}>
                <p>
                  <strong>Monday through Friday</strong>, 8:00 AM - 4:00 PM <br />
                  <i className="ion-ios-telephone"></i>
                   (858) 487-0824 <br />
                  <i className="ion-ios-email"></i>
                  <a href="mailto:rbcpcpreschool@rbcpc.org">
                    rbcpcpreschool@rbcpc.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDetails;
