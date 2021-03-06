import { SET_AREA } from "./actionTypes";
import {
  fetchData,
  cacheData,
  isCached
} from "../../../cache/redux/actionCreators";

/**
 * @function setAreaFilter
 * @param {string} type - oneOf areaTypes, eg. SMALL
 * @returns {object} action
 */
const setAreaFilter = type => ({
  type: SET_AREA,
  areaType: type
});

/**
 * @function setArea
 * @param {string} type - one of areaTypes, eg. MEDIUM
 * @returns {object} action
 */
export const setArea = type => async (dispatch, getState) => {
  dispatch(setAreaFilter(type));

  const { material, box, cache } = getState();
  const filters = { area: type, material, box };

  if (!isCached(filters, cache)) {
    const newData = await fetchData(filters);
    dispatch(cacheData(filters, newData));
  }
};
