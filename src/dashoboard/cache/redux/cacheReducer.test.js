import { ADD_DATA } from "./actionTypes";
import cacheReducer from "./cacheReducer";

describe("cacheReducer", () => {
  it("returns default initial state of empty Map, when no action & state is passed", () => {
    const newState = cacheReducer(undefined, {});
    expect(newState).toBeInstanceOf(Array);
  });
  it("stores data in cache after receiving action ADD_DATA", () => {
    const filters = {
      material: "Earth",
      area: "All"
    };
    const data = [1, 2, 3];
    const newState = cacheReducer(undefined, {
      type: ADD_DATA,
      data,
      filters
    });

    expect(newState[0].data).toEqual(data);
  });
});
