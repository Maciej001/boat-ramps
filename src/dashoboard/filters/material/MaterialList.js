import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import F from "../../components/filters";
import { connect } from "react-redux";
import { setMaterial } from "./redux/actionCreators";
import materialTypes from "./materialTypes";

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
  ).isRequired,
  activeMaterial: PropTypes.oneOf([
    materialTypes.ALL,
    materialTypes.GRAVEL,
    materialTypes.CONCRETE,
    materialTypes.BITUMEN,
    materialTypes.INTERLOCK,
    materialTypes.EARTH,
    materialTypes.OTHER
  ]).isRequired,
  onSelect: PropTypes.func.isRequired
};

const MaterialList = ({ materials, activeMaterial, onSelect }) => (
  <F.Filter data-test="material-component">
    <F.FilterLabel>Material</F.FilterLabel>
    <Table>
      <TBody>
        {materials.map(material => {
          const active = material.label === activeMaterial;
          return (
            <TRow
              key={material.label}
              onClick={() => {
                console.log(`material.label`, material.label);
                onSelect(material.label);
              }}
              data-test="material"
            >
              <TLabel active={active}>{material.label}</TLabel>

              <TValue active={active}>{material.count}</TValue>
            </TRow>
          );
        })}
      </TBody>
    </Table>
  </F.Filter>
);

MaterialList.propTypes = propTypes;

const mapStateToProps = state => ({
  activeMaterial: state.material
});

const mapDispatchToProps = dispatch => ({
  onSelect: type => dispatch(setMaterial(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialList);
