import { combineReducers } from "redux";
import area from "../dashoboard/filters/area/redux/areaReducer";
import material from "../dashoboard/filters/material/redux/materialReducer";
import box from "../dashoboard/map/redux/mapReducer";
import cache from "../dashoboard/cache/redux/cacheReducer";

const rootReducer = combineReducers({ area, material, box, cache });

export default rootReducer;
