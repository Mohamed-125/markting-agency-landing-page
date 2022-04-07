import React from "react";
import { GiCutDiamond } from "react-icons/gi";
import "./PriceItem.css";
const PriceItem1 = () => {
  return (
    <div className="priceItem__div">
      <div className="priceItem__icon">
        <GiCutDiamond />
      </div>
      <div className="priceItem__text">
        <p className="priceItem__title"> Diamond Kings </p>
        <p className="priceItem__price"> $999.99 </p>
        <p style={{ fontSize: "15px" }}> per month </p>
      </div>
      <div className="priceItem__properties">
        <p> Unlimited Users </p> <br />
        <p> Unlimited Budget </p> <br />
        <p> 24/7 Support </p>
      </div>
    </div>
  );
};

export default PriceItem1;
