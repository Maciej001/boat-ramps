import React from "react";
import F from "../components/filters";
import RadioButtons from "../components/RadioButtons";
import areaTypes from "./areaTypes";
import areaRanges from "./areaRanges";
import { PropTypes } from "prop-types";

const propTypes = {
  areaType: PropTypes.oneOf([
    areaTypes.ALL,
    areaTypes.SMALL,
    areaTypes.MEDIUM,
    areaTypes.LARGE
  ])
};

const AreaSelect = ({ areaType }) => {
  const options = Object.keys(areaTypes).map(type => ({
    type,
    label: areaRanges[type].label,
    active: type === areaType
  }));

  return (
    <F.Filter>
      <F.FilterLabel>Area</F.FilterLabel>
      <RadioButtons options={options} onSelect={() => {}} />
    </F.Filter>
  );
};

AreaSelect.propTypes = propTypes;

export default AreaSelect;
