import React from "react";
import "./Brand.css";
import logo from "../../assets/dummy_img.png";

function Brand(props) {
  return (
    <div className="brand" key={props.name}>
      <div className="brand-image">
        <img src={logo} alt="dummy_img" />
      </div>
      <div className="brand-info">
        <div className="brand-name">{props.name}</div>
        <div className="brand-products">Product count: {props.count}</div>
      </div>
    </div>
  );
}

export default Brand;
