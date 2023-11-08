/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Detail } from "../Detail";
import { Heading } from "../Heading";
import { TagAlternative } from "../TagAlternative";
import { TypeIconAlignmentWrapper } from "../TypeIconAlignmentWrapper";
import "./style.css";

export const CardImgMDefault = ({
  tagAlternative = true,
  tag = true,
  className,
  overlapGroupClassName,
  tagBodyClassName,
  tagAlternativeBordervisibleBox = "https://c.animaapp.com/Q0Aoi51W/img/bordervisible-box-2.svg",
}) => {
  return (
    <div className={`card-img-m-default ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`tag-body ${tagBodyClassName}`}>
          {tagAlternative && (
            <TagAlternative
              bordervisibleBox={tagAlternativeBordervisibleBox}
              className="tag-alternative-instance"
              iconHeart="https://c.animaapp.com/Q0Aoi51W/img/icon-heart-2.svg"
            />
          )}

          <div className="body">
            <Detail
              alignment="left"
              className="level"
              color="standard"
              text="Lorem ipsum"
              typographyContentClassName="design-component-instance-node"
            />
            <Heading
              alignment="left"
              className="heading-4"
              color="standard"
              text="Lorem ipsum dolor sit amet"
              typographyContentClassName="design-component-instance-node"
            />
          </div>
        </div>
        {tag && <TypeIconAlignmentWrapper alignment="right" ambient="default" className="tag-2" type="text" />}
      </div>
    </div>
  );
};

CardImgMDefault.propTypes = {
  tagAlternative: PropTypes.bool,
  tag: PropTypes.bool,
  tagAlternativeBordervisibleBox: PropTypes.string,
};
