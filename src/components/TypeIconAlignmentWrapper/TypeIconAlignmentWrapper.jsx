/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Tag } from "../Tag";
import "./style.css";

export const TypeIconAlignmentWrapper = ({ type, alignment, ambient, className }) => {
  return (
    <div className={`type-icon-alignment-wrapper ${type} alignment-2-${alignment} ambient-${ambient} ${className}`}>
      {["alternative-6", "icon"].includes(type) && (
        <div className="div">
          {type === "icon" && (
            <img
              className="combined-shape"
              alt="Combined shape"
              src={
                ambient === "inverse"
                  ? "https://c.animaapp.com/Q0Aoi51W/img/combined-shape-3.svg"
                  : "https://c.animaapp.com/Q0Aoi51W/img/combined-shape-2.svg"
              }
            />
          )}

          {type === "alternative-6" && <>1234</>}
        </div>
      )}

      {type === "text" && (
        <Tag
          alignment="left"
          className="instance-node"
          color={ambient === "inverse" ? "inverse" : "main"}
          text="NOVEDAD"
          typographySpecialClassName={`${alignment === "right" && "class"}`}
        />
      )}
    </div>
  );
};

TypeIconAlignmentWrapper.propTypes = {
  type: PropTypes.oneOf(["text", "icon", "alternative-6"]),
  alignment: PropTypes.oneOf(["center", "right", "left"]),
  ambient: PropTypes.oneOf(["inverse", "default"]),
};
