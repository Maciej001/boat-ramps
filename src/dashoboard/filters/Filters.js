import React from "react";
import PropTypes from "prop-types";
import F from "../components/filters";
import MaterialList from "./material/MaterialList";
import areaTypes from "./area/areaTypes";
import AreaSelect from "./area/AreaSelect";

const propTypes = {
  materials: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired
    })
  ),
  areaType: PropTypes.oneOf([
    areaTypes.ALL,
    areaTypes.SMALL,
    areaTypes.MEDIUM,
    areaTypes.LARGE
  ])
};

const Filters = ({ materials, areaType }) => (
  <F.Container>
    <F.Header>Ramps</F.Header>
    <MaterialList materials={materials} />
    <AreaSelect areaType={areaType} />
  </F.Container>
);

Filters.propTypes = propTypes;

export default Filters;
