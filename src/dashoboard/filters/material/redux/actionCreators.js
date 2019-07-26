import { SET_MATERIAL } from "./actionTypes";
import {
  isCached,
  fetchData,
  cacheData
} from "../../../cache/redux/actionCreators";

/**
 * @function setMaterialFilter
 * @param {string} type - oneOf materialTypes, eg. CONCRETE
 * @returns {object} action
 */
export const setMaterialFilter = type => ({
  type: SET_MATERIAL,
  materialType: type
});

/**
 * @function setMaterial
 * @param {string} type - one of materialTypes, eg. CONCRETE
 * @returns {object} action
 */
export const setMaterial = type => async (dispatch, getState) => {
  const { area, box, cache } = getState();
  const filters = { area, material: type, box };
  dispatch(setMaterialFilter(type));

  if (!isCached(filters, cache)) {
    const data = await fetchData(filters);
    dispatch(cacheData(filters, data));
  }
};
