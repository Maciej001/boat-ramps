import React from "react";
import PropTypes from "prop-types";
import F from "../components/filters";
import MaterialList from "./material/MaterialList";
import AreaSelect from "./area/AreaSelect";

const propTypes = {
  materials: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  )
};

const Filters = ({ materials }) => (
  <F.Container>
    <F.Header>Ramps</F.Header>
    <MaterialList materials={materials} data-test="material-list" />
    <AreaSelect data-test="area-select" />
  </F.Container>
);

Filters.propTypes = propTypes;

export default Filters;
