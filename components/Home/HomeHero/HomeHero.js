import React from "react";
import Button from "../../UI/Button/Button"

import classes from "./HomeHero.module.css";



const HomeHero = (props) => {
    let attachedClasses = [classes.homeHero]
    return (
<div className={classes.homeHero}>
    <h1>Opening August 31, 2020 <br />Enrolling 3 year olds and 4 year olds </h1>
    <Button btnType="full" clicked={() => console.log("hello")}>Community Applications for 2020/2021</Button>
    <br />
    <Button btnType="full" clicked={() => console.log("hello")}>Parent / Child Class Registration 2020/2021</Button>
    <br />
    <Button btnType="full" clicked={() => console.log("hello")}>Program Info for 2020/2021</Button>
    {/* <br />
    <Button btnType="ghost" clicked={() => window.open("https://vimeo.com/308476600", "_blank")}>Check out a video of our school</Button> */}
</div>
    )
};

export default HomeHero;
