import rootReducer from "../redux/rootReducer";
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";

/**
 * Return ShallowWrapper containing  node(s) with the given data-testvalue
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within
 * @param {value} - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);

/**
 * Create a testing store from initialState, middlewares and imported reducer
 * @function storeFactory
 * @param {object} initialState
 * @returns {Store} - redux store
 */

export const storeFactory = initialState =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));
