import materialTypes from "../materialTypes";
import { SET_MATERIAL } from "./actionTypes";

const initialState = materialTypes.ALL;

/**
 * @function materialReducer
 * @param {string} state - oneOf materialTypes
 * @param {object} action
 * @returns {string} - new state
 */
const materialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATERIAL:
      return action.materialType;
    default:
      return state;
  }
};

export default materialReducer;
