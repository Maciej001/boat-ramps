import React from "react";

import F from "../../components/filters";
import RadioButtons from "../../components/radio/RadioButtons";
import areaTypes from "./areaTypes";
import areaRanges from "./areaRanges";

const AreaSelect = () => {
  const options = Object.keys(areaTypes).map(type => ({
    type,
    label: areaRanges[type].label
  }));

  return (
    <F.Filter data-test="area-filters">
      <F.FilterLabel>Area</F.FilterLabel>
      <RadioButtons options={options} />
    </F.Filter>
  );
};

export default AreaSelect;
