import { ADD_DATA } from "./actionTypes";

/**
 * State is an array of objects
 * {
 *   filters: {},
 *   data: [],
 *   materials: {
 *      Bitumen: 7,
 *      ...
 *   }
 * }
 */
const initialState = [];

/**
 * @function cacheReducer
 * @param {object} state - cache of shape
 * @param {object} action
 * @returns {Map} - new state
 */
const cacheReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [
        ...state,
        {
          filters: action.filters,
          data: action.data
        }
      ];
    default:
      return state;
  }
};

export default cacheReducer;
