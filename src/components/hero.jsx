import React from "react";
import restaurantfood from "../images/restauranfood.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus
          tincidunt sagittis. Morbi tempor felis eget augue malesuada luctus.
          Nullam quis orci non est efficitur sollicitudin. Sed sodales a est sit
          amet blandit. Sed volutpat lorem felis, vel pharetra augue cursus sed.
        </p>
        <button>
          <h4>Reserve a Table</h4>
        </button>
      </div>
      <div className="hero-img">
        <img src={restaurantfood} />
      </div>
    </>
  );
};

export default Hero;
