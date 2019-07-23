import areaTypes from "../areaTypes";
import { SET_AREA } from "./actionTypes";

/**
 * @function setArea
 * @param {string} type - one of areaTypes, eg. MEDIUM
 * @returns {object} action
 */
export const setArea = type => ({
  type: SET_AREA,
  areaType: areaTypes[type]
});
