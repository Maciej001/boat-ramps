import { SET_BORDER_BOX } from "./actionTypes";

/**
 * Sets the longitude and latitude edges of the map <Map />
 * @function setBorderBox
 * @param {array} box - [[West, South,], [East, North]] - floats
 * @returns {object} action
 */
export const setBorderBox = box => ({
  type: SET_BORDER_BOX,
  box
});

export const getBox = (data, dispatch) => {
  const box = data.reduce(
    (acc, item) => {
      const coord = item.geometry.coordinates[0][0];

      // Find box boundaries of single feature (Polygon)
      const featureBox = coord.reduce(
        (featureAcc, item) => {
          // for the first element;
          if (featureAcc.W === null)
            return { W: item[0], S: item[1], E: item[0], N: item[1] };

          return {
            W: Math.min(featureAcc.W, item[0]),
            S: Math.min(featureAcc.S, item[1]),
            E: Math.max(featureAcc.E, item[0]),
            N: Math.max(featureAcc.N, item[1])
          };
        },
        {
          W: null,
          S: null,
          E: null,
          N: null
        }
      );

      // first feature
      if (acc.W === null) return featureBox;
      return {
        W: Math.min(acc.W, featureBox.W),
        S: Math.min(acc.S, featureBox.S),
        E: Math.max(acc.E, featureBox.E),
        N: Math.max(acc.N, featureBox.N)
      };
    },
    {
      W: null,
      S: null,
      E: null,
      N: null
    }
  );

  const boxArray = [[box.W, box.S], [box.E, box.N]];

  dispatch(setBorderBox(boxArray));

  return boxArray;
};
