import React from "react";
import greekSalad from "../images/greekSalad.jpg";

const Highlights = () => {
  return (
    <div className="highlights">
      <div className="highlights-top">
        <h2>This week's specials!</h2>
        <button>
          <h4>Online menu</h4>
        </button>
      </div>
      <div className="highlights-menu">
        <div className="highlights-card">
          <img width="100%" src={greekSalad} />
          <h4>Greek salad</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            finibus tincidunt sagittis.
          </p>
          <button>
            <h4>Order a delivery 🛵</h4>
          </button>
        </div>
        <div className="highlights-card">
          <img width="100%" src={greekSalad} />
          <h4>Greek salad</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            finibus tincidunt sagittis.
          </p>
          <button>
            <h4>Order a delivery 🛵</h4>
          </button>
        </div>
        <div className="highlights-card">
          <img width="100%" src={greekSalad} />
          <h4>Greek salad</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            finibus tincidunt sagittis.
          </p>
          <button>
            <h4>Order a delivery 🛵</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
