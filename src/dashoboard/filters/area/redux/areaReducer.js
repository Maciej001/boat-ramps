import areaTypes from "../areaTypes";
import { SET_AREA } from "./actions";

const initialState = {
  area: areaTypes.ALL
};

/**
 * @function areaReducer
 * @param {string} state - oneOf areaTypes, eg. LARGE
 * @param {object} action
 * @returns {string} - new state, eg. MEDIUM
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AREA:
      return { ...state, area: action.areaType };
    default:
      return state;
  }
};
