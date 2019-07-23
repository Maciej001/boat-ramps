import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import Option from "./Option";

const setup = option => {
  const store = storeFactory({});
  return shallow(<Option store={store} option={option} />)
    .dive()
    .dive();
};

describe("<RadioButtons /> - <Option />", () => {
  const active = { type: "ALL", label: "All", active: true };
  const inactive = { type: "SMALL", label: "0-50", active: false };

  it("should render checked icon on active <Option />", () => {
    const wrapper = setup(active);
    const option = findByTestAttr(wrapper, "checked-icon");
    expect(option.length).toBe(1);
  });

  it("should render un-checked icon on inactive <Option />", () => {
    const wrapper = setup(inactive);
    const option = findByTestAttr(wrapper, "unchecked-icon");
    expect(option.length).toBe(1);
  });
});
