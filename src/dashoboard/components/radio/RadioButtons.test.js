import React from "react";
import { shallow } from "enzyme";
import RadioButtons from "./RadioButtons";
import { findByTestAttr } from "../../../test/testUtils";

describe("<RadioButtons />", () => {
  const options = [
    { type: "ALL", label: "All" },
    { type: "SMALL", label: "0-50" },
    { type: "MEDIUM", label: "50-200" },
    { type: "LARGE", label: "200-500" }
  ];

  it("should render correct number of options", () => {
    const wrapper = shallow(<RadioButtons options={options} />);
    const optionItems = findByTestAttr(wrapper, "radio-button-option");
    expect(optionItems.length).toBe(options.length);
  });
});
