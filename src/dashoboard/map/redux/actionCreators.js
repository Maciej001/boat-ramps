import { SET_BORDER_BOX } from "./actionTypes";

/**
 * Sets the longitude and latitude edges of the map <Map />
 * @function setBorderBox
 * @param {array} box - [West, South, East, North] - floats
 * @returns {object} action
 */
export const setBorderBox = box => ({
  type: SET_BORDER_BOX,
  box
});
