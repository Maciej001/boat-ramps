import { SET_MATERIAL } from "./actionTypes";

/**
 * @function setMaterial
 * @param {string} type - oneOf materialTypes, eg. CONCRETE
 * @returns {object} action
 */
export const setMaterial = type => ({
  type: SET_MATERIAL,
  materialType: type
});
