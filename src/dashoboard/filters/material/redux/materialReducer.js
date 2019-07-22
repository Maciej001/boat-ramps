import materialTypes from "../materialTypes";
import { SET_MATERIAL } from "./actions";

const initialState = {
  material: materialTypes.ALL
};

/**
 * @function materialReducer
 * @param {string} state - oneOf materialTypes
 * @param {object} action
 * @returns {string} - new state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MATERIAL:
      return { ...state, material: action.materialType };
    default:
      return state;
  }
};
