import React from "react";
import HomePhoto from "./HomePhoto/HomePhoto";

import classes from "./HomePhotos.module.css";

const HomePhotos = (props) => {
  let attachedClasses = [classes.mealsShowcase, classes.clearfix];
  return (
    <section className={classes.sectionMeals}>
      <ul className={attachedClasses.join(" ")}>
        <HomePhoto
          src="/images/homePhotos/1.jpg"
          alt="A teacher and students"
        />
        <HomePhoto
          src="/images/homePhotos/2.jpg"
          alt="Kids having fun with water and soap"
        />
        <HomePhoto
          src="/images/homePhotos/3.jpg"
          alt="Kids having fun with hula hoops"
        />
        <HomePhoto
          src="/images/homePhotos/4.jpg"
          alt="Kids having fun with crafts"
        />
      </ul>
      <ul className={attachedClasses.join(" ")}>
        <HomePhoto
          src="/images/homePhotos/5.jpg"
          alt="Kids having fun with more crafts"
        />
        <HomePhoto
          src="/images/homePhotos/6.jpg"
          alt="A child in a halloween costume"
        />
        <HomePhoto
          src="/images/homePhotos/7.jpg"
          alt="Children reading books"
        />
        <HomePhoto
          src="/images/homePhotos/8.jpg"
          alt="A child playing with legos"
        />
      </ul>
    </section>
  );
};

export default HomePhotos;
