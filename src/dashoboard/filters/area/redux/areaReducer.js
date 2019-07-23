import areaTypes from "../areaTypes";
import { SET_AREA } from "./actionTypes";

const initialState = areaTypes.ALL;

/**
 * @function areaReducer
 * @param {string} state - oneOf areaTypes, eg. LARGE
 * @param {object} action
 * @returns {string} - new state, eg. MEDIUM
 */
const areaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AREA:
      return action.areaType;
    default:
      return state;
  }
};

export default areaReducer;
