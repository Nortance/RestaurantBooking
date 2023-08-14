import React from "react";
import placeholder from "../images/placeholder.jpg";

const Testamonials = () => {
  return (
    <div className="testamonials">
      <h3>Testamonials</h3>
      <p>These are totally true :p</p>
      <div className="testamonials-menu">
        <div className="testamonials-card">
          <h4>Rating</h4>
          <img src={placeholder} />
          <p>
            "Lorem ipsum dolor sit amet" - Jane
            <br /> ⭐⭐⭐⭐⭐
          </p>
        </div>
        <div className="testamonials-card">
          <h4>Rating</h4>
          <img src={placeholder} />
          <p>
            "Lorem ipsum dolor sit amet" - Jane
            <br /> ⭐⭐⭐⭐⭐
          </p>
        </div>
        <div className="testamonials-card">
          <h4>Rating</h4>
          <img src={placeholder} />
          <p>
            "Lorem ipsum dolor sit amet" - Jane
            <br />
            ⭐⭐⭐⭐⭐
          </p>
        </div>
        <div className="testamonials-card">
          <h4>Rating</h4>
          <img src={placeholder} />
          <p>
            "Lorem ipsum dolor sit amet" - Jane
            <br /> ⭐⭐⭐⭐⭐
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testamonials;
