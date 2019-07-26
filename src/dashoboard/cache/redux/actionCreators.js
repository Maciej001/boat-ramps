import data from "../../../data/boat-ramps.js";
import { ADD_DATA } from "./actionTypes";
import materialTypes from "../../filters/material/materialTypes.js";
import areaRanges from "../../filters/area/areaRanges";
import areaTypes from "../../filters/area/areaTypes.js";
import { getBox } from "../../map/redux/actionCreators.js";

/**
 * Returns a function that will execute f2 first and then f1
 * @param {object} filter selected { material, area } from state
 * @param {functions} fns filter functions collection
 * @returns {boolean}
 */
const getFiltersPipe = (filter, ...fns) => feature =>
  fns.reduce((thru, fn) => thru && fn(filter, feature), true);

/**
 * @param {object} filter {area, material, box} filter passed from state
 * @param {object} feature feature from geojson
 * @return {boolean} should the feature be included in the collection
 */
const materialFilter = (filter, feature) =>
  filter.material === materialTypes.ALL
    ? true
    : feature.properties.material === filter.material;

/**
 *
 * @param {object} filter { area, material, box } filter passed from state
 * @param {object} feature feature from geojson
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
 *
 * @param {} filter
 * @param {object} feature object from geojson
 */
const boxFilter = (filter, feature) =>
  feature.geometry.coordinates[0][0].reduce(
    (acc, item, index) =>
      acc ||
      (item[0] > filter.box[0][0] &&
        item[1] > filter.box[0][1] &&
        item[0] < filter.box[1][0] &&
        item[1] < filter.box[1][1])
        ? true
        : false,
    false
  );

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
  const pipe = getFiltersPipe(filters, materialFilter, areaFilter, boxFilter);
  return data.features.filter(pipe);
};

/**
 * When the app initialises it fetches the data either from the localStorage
 * or fetches data from the "server"
 */
export const initCache = () => async (dispatch, getState) => {
  const { area, material, box } = getState();
  const filters = { area, material, box };

  // Check if data were cached in local storage before
  let data = JSON.parse(localStorage.getItem("boatramps.data"));

  if (!data) {
    data = await fetchData(filters);

    // Assumption: The initial filter and data are unchanged.
    // That's there is no need to store  the filter too
    localStorage.setItem("boatramps.data", JSON.stringify(data));
  }

  // getBox also saves the box in filters
  const boxFromFeatures = getBox(data, dispatch);

  dispatch(cacheData({ ...filters, box: boxFromFeatures }, data));
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
