import { SET_BORDER_BOX } from "./actionTypes";
import mapReducer from "./mapReducer";
import { initialState } from "./mapReducer";

describe("mapReducer", () => {
  it("returns default initial state of ALL, when no action & state is passed", () => {
    const newState = mapReducer(undefined, {});
    expect(newState).toBe(initialState);
  });
  it("returns correct new state after receiving an action", () => {
    const newBox = [123, 5, 124, 4];
    const newState = mapReducer(undefined, {
      type: SET_BORDER_BOX,
      box: newBox
    });

    expect(newState).toBe(newBox);
  });
});
