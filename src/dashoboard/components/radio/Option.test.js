import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import Option from "./Option";

describe("<RadioButtons /> - <Option />", () => {
  const active = { type: "ALL", label: "All", active: true };
  const inactive = { type: "SMALL", label: "0-50", active: false };
  const onClick = () => {};

  it("should render checked icon on active <Option />", () => {
    const wrapper = shallow(<Option option={active} onClick={onClick} />);
    const option = findByTestAttr(wrapper, "checked-icon");
    expect(option.length).toBe(1);
  });

  it("should render un-checked icon on inactive <Option />", () => {
    const wrapper = shallow(<Option option={inactive} onClick={onClick} />);
    const option = findByTestAttr(wrapper, "unchecked-icon");
    expect(option.length).toBe(1);
  });
});
