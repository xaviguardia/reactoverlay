/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Tag } from "../Tag";
import "./style.css";

export const TagAlternative = ({
  className,
  iconHeart = "https://c.animaapp.com/Q0Aoi51W/img/icon-heart@2x.png",
  bordervisibleBox = "https://c.animaapp.com/Q0Aoi51W/img/bordervisible-box.svg",
}) => {
  return (
    <div className={`tag-alternative ${className}`}>
      <div className="content">
        <img className="icon-heart" alt="Icon heart" src={iconHeart} />
        <Tag alignment="left" className="tag-instance" color="inverse" text="100k" />
      </div>
      <img className="bordervisible-box" alt="Bordervisible box" src={bordervisibleBox} />
    </div>
  );
};

TagAlternative.propTypes = {
  iconHeart: PropTypes.string,
  bordervisibleBox: PropTypes.string,
};
