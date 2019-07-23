import { ADD_DATA } from "./actionTypes";

/**
 * @function cacheData
 * @param {string} type - oneOf materialTypes, eg. CONCRETE
 * @returns {object} action
 */
export const setMaterial = ({ filter, data }) => ({
  type: ADD_DATA,
  filter,
  data
});
