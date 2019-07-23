import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import AreaSelect from "./AreaSelect";

describe("<AreaSelect />", () => {
  it("renders component without error", () => {
    const wrapper = shallow(<AreaSelect />);
    const component = findByTestAttr(wrapper, "area-filters");
    expect(component.length).toBe(1);
  });
});
