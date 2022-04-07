import React from "react";
import "./Pricing.css";
import PriceItem1 from "./PriceItem1";
import PriceItem2 from "./PriceItem2";
import PriceItem3 from "./PriceItem3";
const Pricing = () => {
  return (
    <section className="pricing__section section__padding flex__center ">
      <div className="pricing__contener flex__center">
        <h3
          style={{
            fontSize: "50px",
            position: "relative",
            top: "2rem",
            textAlign: "center",
          }}
        >
          Our Services
        </h3>

        <div className="pricing__pricing flex__center">
          <PriceItem1 />
          <PriceItem2 />
          <PriceItem3 />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
