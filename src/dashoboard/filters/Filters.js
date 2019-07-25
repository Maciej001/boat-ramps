import React from "react";
import F from "../components/filters";
import MaterialList from "./material/MaterialList";
import AreaSelect from "./area/AreaSelect";

const Filters = () => (
  <F.Container>
    <F.Header>Ramps</F.Header>
    <MaterialList data-test="material-list" />
    <AreaSelect data-test="area-select" />
  </F.Container>
);

export default Filters;
