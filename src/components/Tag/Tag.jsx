/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Tag = ({ alignment, color, className, text = "NEW", typographySpecialClassName }) => {
  return (
    <div className={`tag ${className}`}>
      <div className={`typography-special ${color} ${alignment} ${typographySpecialClassName}`}>{text}</div>
    </div>
  );
};

Tag.propTypes = {
  alignment: PropTypes.oneOf(["right", "left"]),
  color: PropTypes.oneOf(["main", "inverse"]),
  text: PropTypes.string,
};
