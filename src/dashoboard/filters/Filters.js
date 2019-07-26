import React from "react";
import F from "../components/filters";
import MaterialList from "./material/MaterialList";
import AreaSelect from "./area/AreaSelect";

const Filters = () => (
  <F.Container>
    <F.Header>Boat ramps</F.Header>
    <F.Body>
      <MaterialList data-test="material-list" />
      <AreaSelect data-test="area-select" />
    </F.Body>
  </F.Container>
);

export default Filters;
