import React from "react";
import "./PriceItem.css";
import { AiFillGolden } from "react-icons/ai";

const PriceItem1 = () => {
  return (
    <div className="priceItem__div">
      <div className="priceItem__icon">
        <AiFillGolden />
      </div>
      <div className="priceItem__text">
        <p className="priceItem__title"> Gold Rush </p>
        <p className="priceItem__price"> $299.99 </p>
        <p style={{ fontSize: "15px" }}> per month </p>
      </div>
      <div className="priceItem__properties">
        <p>1000 New Users </p> <br />
        <p>$50,000</p> <br />
        <p>Lead Gen Analytics</p>
      </div>
    </div>
  );
};

export default PriceItem1;
