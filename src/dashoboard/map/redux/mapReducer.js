import { SET_BORDER_BOX } from "./actions";

const initialState = {
  area: [153, -28, 154, -27]
};

/**
 * @function mapReducer
 * @param {array} state -[West, South, East, North] - floats
 * @param {object} action
 * @returns {string} - new state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BORDER_BOX:
      return {
        ...state,
        box: action.box
      };
    default:
      return state;
  }
};
