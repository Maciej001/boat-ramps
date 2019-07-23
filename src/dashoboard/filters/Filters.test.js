import React from "react";
import { shallow } from "enzyme";
import Filters from "./Filters";
import { findByTestAttr } from "../../test/testUtils";
import materialTypes from "./material/materialTypes";

describe("<Filters /> render", () => {
  let wrapper;

  beforeEach(() => {
    const materials = [
      { label: materialTypes.BITUMEN, count: 7, active: true },
      { label: materialTypes.CONCRETE, count: 3, active: false }
    ];
    wrapper = shallow(<Filters materials={materials} />);
  });

  test("renders <MaterialList />", () => {
    const materialList = findByTestAttr(wrapper, "material-list");
    expect(materialList.length).toBe(1);
  });
  test("renders <AreaSelect />", () => {
    const areaFilters = findByTestAttr(wrapper, "area-select");
    expect(areaFilters.length).toBe(1);
  });
});
