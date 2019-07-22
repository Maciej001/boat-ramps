import { combineReducers } from "redux";
import area from "../dashoboard/filters/area/redux/areaReducer";
import material from "../dashoboard/filters/material/redux/materialReducer";
import box from "../dashoboard/map/redux/mapReducer";

export default combineReducers({ area, material, box });
