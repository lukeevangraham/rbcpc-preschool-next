import React from "react";
import HomePhoto from "./HomePhoto/HomePhoto"

import classes from "./HomePhotos.module.css"

const HomePhotos = (props) => (
  <section>
    <ul>
        <HomePhoto src="/images/homePhotos/1.jpg" />
        <HomePhoto src="/images/homePhotos/2.jpg" />
    </ul>
  </section>
);

export default HomePhotos;
