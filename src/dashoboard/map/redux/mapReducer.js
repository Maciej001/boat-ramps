import { SET_BORDER_BOX } from "./actionTypes";

export const initialState = [[153, -28.5], [154, -27]];

/**
 * @function mapReducer
 * @param {array} state -[West, South, East, North] - floats
 * @param {object} action
 * @returns {string} - new state
 */
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BORDER_BOX:
      return action.box;
    default:
      return state;
  }
};

export default mapReducer;
