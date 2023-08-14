import React from "react";
import restaurantfood from "../images/restauranfood.jpg";

const About = () => {
  return (
    <>
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus
          tincidunt sagittis. Morbi tempor felis eget augue malesuada luctus.
          Nullam quis orci non est efficitur sollicitudin. Sed sodales a est sit
          amet blandit. Sed volutpat lorem felis, vel pharetra augue cursus sed.
        </p>
      </div>
      <div className="about-img">
        <img src={restaurantfood} className="img-one" />
        <img src={restaurantfood} className="img-two" />
      </div>
    </>
  );
};

export default About;
