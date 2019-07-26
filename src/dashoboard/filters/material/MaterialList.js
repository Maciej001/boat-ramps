import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import F from "../../components/filters";
import { connect } from "react-redux";
import { setMaterial } from "./redux/actionCreators";
import materialTypes from "./materialTypes";
import { getMaterialColor } from "../../components/utils";

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
  font-size: 15px;
  font-weight: bold;
  padding: 5px 20px 5px 0;
  color: ${props =>
    props.active
      ? props.theme[`${props.color}500`]
      : props.hasData
      ? props.theme.grey500
      : props.theme.grey300};
`;

const TValue = styled.td`
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  padding: 5px 0 5px 20px;
  color: ${props =>
    props.active ? props.theme[`${props.color}500`] : props.theme.grey300};
`;

const propTypes = {
  materials: PropTypes.object,
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

const MaterialList = ({ materials, activeMaterial, onSelect }) => {
  const materialColor = getMaterialColor(activeMaterial);
  return (
    <F.Filter data-test="material-component">
      <F.FilterLabel>Material</F.FilterLabel>
      <Table>
        <TBody>
          {materials &&
            Object.keys(materials).map(material => {
              const active = material === activeMaterial;
              return (
                <TRow
                  key={material}
                  onClick={() => {
                    onSelect(material);
                  }}
                  data-test="material"
                >
                  <TLabel
                    active={active}
                    color={materialColor}
                    hasData={!!materials[material]}
                  >
                    {material}
                  </TLabel>

                  {!!materials[material] && (
                    <TValue active={active} color={materialColor}>
                      {materials[material]}
                    </TValue>
                  )}
                </TRow>
              );
            })}
        </TBody>
      </Table>
    </F.Filter>
  );
};

MaterialList.propTypes = propTypes;

const getMaterials = state => {
  const { cache, material, area, box } = state;
  const cachedItem = cache.find(
    item =>
      JSON.stringify(item.filters) === JSON.stringify({ area, material, box })
  );
  return cachedItem ? getMaterialsList(cachedItem.data) : {};
};

/**
 * Takes a collection of features and counts number of occurences of material
 * @param {array} data
 * @returns {object} key-value pairs: materialType: counter
 */
export const getMaterialsList = data =>
  data.reduce(
    (acc, feature) => {
      const { material } = feature.properties;
      return material in acc
        ? {
            ...acc,
            [material]: acc[material] + 1,
            All: acc.All + 1
          }
        : { ...acc, [material]: 1, All: acc.All + 1 };
    },
    {
      [materialTypes.ALL]: 0,
      [materialTypes.BITUMEN]: 0,
      [materialTypes.CONCRETE]: 0,
      [materialTypes.GRAVEL]: 0,
      [materialTypes.INTERLOCK]: 0,
      [materialTypes.EARTH]: 0,
      [materialTypes.OTHER]: 0
    }
  );

const mapStateToProps = state => ({
  activeMaterial: state.material,
  materials: state.cache && state.cache.length ? getMaterials(state) : {}
});

const mapDispatchToProps = dispatch => ({
  onSelect: type => dispatch(setMaterial(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialList);
