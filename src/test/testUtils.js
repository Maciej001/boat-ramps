/**
 * Return ShallowWrapper containing  node(s) with the given data-testvalue
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within
 * @param {value} - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);
