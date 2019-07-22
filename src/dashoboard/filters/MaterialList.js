import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import F from "../components/filters";

const Table = styled.table`
  width: 100%;
`;
const TBody = styled.tbody`
  width: 100%;
`;

const TRow = styled.tr`
  width: 100%;
`;
const TLabel = styled.td`
  font-size: 16px;
  padding: 5px 20px 5px 0;
  color: ${props => (props.active ? "blue" : "#666")};
`;

const TValue = styled.td`
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  padding: 5px 0 5px 20px;
  color: ${props => (props.active ? "blue" : "#222")};
`;

const propTypes = {
  materials: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
  )
};

const MaterialList = ({ materials }) => (
  <F.Filter>
    <F.FilterLabel>Material</F.FilterLabel>
    <Table>
      <TBody>
        {materials.map(material => (
          <TRow key={material.label}>
            <TLabel>{material.label}</TLabel>
            <TValue>{material.count}</TValue>
          </TRow>
        ))}
      </TBody>
    </Table>
  </F.Filter>
);

MaterialList.propTypes = propTypes;

export default MaterialList;
