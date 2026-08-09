import React from "react";
import "./EcommerceLoader.css";

const EcommerceLoader = ({
  message = "Loading...",
  fullScreen = false,
  size = "md",
  showText = true,
}) => {
  return (
    <div
      className={`ecommerce-loader-wrapper ${
        fullScreen ? "fullscreen-loader" : ""
      }`}
    >
      <div className={`ecommerce-loader ${size}`}></div>

      {showText && <p className="loader-message">{message}</p>}
    </div>
  );
};

export default EcommerceLoader;
