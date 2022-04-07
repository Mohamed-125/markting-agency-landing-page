import React from "react";
import "./PriceItem.css";
import { GiAsteroid } from "react-icons/gi";
const PriceItem1 = () => {
  return (
    <div className="priceItem__div">
      <div className="priceItem__icon">
        <GiAsteroid />
      </div>
      <div className="priceItem__text">
        <p className="priceItem__title"> Starter Pack</p>
        <p className="priceItem__price"> $99.99</p>
        <p style={{ fontSize: "15px" }}> per month </p>
      </div>
      <div className="priceItem__properties">
        <p> 100 New Users</p> <br />
        <p> $10,000 Budget </p> <br />
        <p> Retargeting analytics</p>
      </div>
    </div>
  );
};

export default PriceItem1;
