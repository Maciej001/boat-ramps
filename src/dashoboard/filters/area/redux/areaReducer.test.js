import { SET_AREA } from "./actionTypes";
import areaReducer from "./areaReducer";
import areaTypes from "../areaTypes";

describe("areaReducer", () => {
  it("returns default initial state of ALL, when no action & state is passed", () => {
    const newState = areaReducer(undefined, {});
    expect(newState).toBe(areaTypes.ALL);
  });
  it("returns correct new state after receiving an action", () => {
    const newState = areaReducer(undefined, {
      type: SET_AREA,
      areaType: areaTypes.LARGE
    });

    expect(newState).toBe(areaTypes.LARGE);
  });
});
