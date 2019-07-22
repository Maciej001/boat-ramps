import React from "react";
import { shallow } from "enzyme";
import RadioButtons from "./RadioButtons";
import { findByTestAttr } from "../../../test/testUtils";

describe("<RadioButtons />", () => {
  const options = [
    { type: "ALL", label: "All", active: true },
    { type: "SMALL", label: "0-50", active: false },
    { type: "MEDIUM", label: "50-200", active: false },
    { type: "LARGE", label: "200-500", active: false }
  ];
  const onSelect = () => {};

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RadioButtons options={options} onSelect={onSelect} />);
  });

  it("should render correct number of options", () => {
    const optionItems = findByTestAttr(wrapper, "radio-button-option");
    expect(optionItems.length).toBe(options.length);
  });
});
