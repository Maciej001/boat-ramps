import { ADD_DATA } from "./actionTypes";

const initialState = new Map();

/**
 * @function cacheReducer
 * @param {Map} state - cache of pairs: filters - data
 * @param {object} action
 * @returns {Map} - new state
 */
const cacheReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return state.set(action.filters, action.data);
    default:
      return state;
  }
};

export default cacheReducer;
