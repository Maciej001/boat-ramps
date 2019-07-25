import data from "../../../data/boat-ramps.js";
import { ADD_DATA } from "./actionTypes";
import materialTypes from "../../filters/material/materialTypes.js";
import areaRanges from "../../filters/area/areaRanges";
import areaTypes from "../../filters/area/areaTypes.js";

/**
 * Returns a function that will execute f2 first and then f1
 * @param {object} filter selected { material, area } from state
 * @param {functions} fns filter functions collection
 * @returns {boolean}
 */
const getFiltersPipe = (filter, ...fns) => feature =>
  fns.reduce((isIn, fn) => isIn && fn(filter, feature), true);

/**
 * @param {object} filter {area, material} filter passed from state
 * @param {object} feature feature from geojson
 * @return {boolean} should the feature be included in the collection
 */
const materialFilter = (filter, feature) =>
  filter.material === materialTypes.ALL
    ? true
    : feature.properties.material === filter.material;

/**
 *
 * @param {object} filter { area, material } filter passed from state
 * @param {*} feature feature from geojson
 * @returns {boolean} should the feature be included in the collection
 */
const areaFilter = (filter, feature) => {
  const { area_: featureArea } = feature.properties;
  const area = areaRanges[filter.area];

  return filter.area === areaTypes.ALL
    ? true
    : featureArea >= area.min && featureArea < area.max;
};

/**
 * Checks if data for given filters has been already cached in store;
 * @param {object} filters {material , area} from state
 * @param {array} cache - from state
 * @returns {boolean}
 */
export const isCached = (filters, cache) => {
  const filtersSet = new Set(cache.map(item => JSON.stringify(item.filters)));
  return filtersSet.has(JSON.stringify(filters));
};

/**
 * Filters out features from `data` geojson object and updates cache
 * @param {object} filters { area, material } from state
 */
export const fetchData = async filters => {
  const pipe = getFiltersPipe(filters, materialFilter, areaFilter);
  return data.features.filter(pipe);
};

export const initCache = () => async (dispatch, getState) => {
  const { area, material } = getState();
  const filters = { area, material };

  let data = JSON.parse(localStorage.getItem("boatramps.data"));

  if (!data) {
    data = await fetchData(filters);
    localStorage.setItem("boatramps.data", JSON.stringify(data));
  }

  dispatch(cacheData(filters, data));
};

/**
 * Caches new set of data in store with filters as a key
 * @function cacheData
 * @param {object} filters {material, area} filter from state
 * @returns {object} action ADD_DATA or null
 */
export const cacheData = (filters, data) => ({
  type: ADD_DATA,
  filters,
  data
});
