import { SET_MATERIAL } from "./actionTypes";
import materialReducer from "./materialReducer";
import materialTypes from "../materialTypes";

describe("materialReducer", () => {
  it("returns default initial state of ALL, when no action & state is passed", () => {
    const newState = materialReducer(undefined, {});
    expect(newState).toBe(materialTypes.ALL);
  });
  it("returns correct new state after receiving an action", () => {
    const newState = materialReducer(undefined, {
      type: SET_MATERIAL,
      materialType: materialTypes.CONCRETE
    });

    expect(newState).toBe(materialTypes.CONCRETE);
  });
});
