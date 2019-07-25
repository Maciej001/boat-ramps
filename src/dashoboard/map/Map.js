import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MapContainer = styled.div`
  flex: 1 1 100%;
  min-width: 200px;
  height: 400px;
  margin-left: 40px;
  border: 1px solid grey;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

// const propTypes = {
//   data: PropTypes.arrayOf(PropTypes.any)
// };

const Map = ({ data }) => <MapContainer />;

// Map.propTypes = propTypes;

export default Map;
