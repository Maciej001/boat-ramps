import { SET_MATERIAL } from "./actionTypes";
import materialTypes from "../materialTypes";

/**
 * @function setMaterial
 * @param {string} type - oneOf materialTypes, eg. CONCRETE
 * @returns {object} action
 */
export const setMaterial = type => ({
  type: SET_MATERIAL,
  materialType: materialTypes[type]
});
