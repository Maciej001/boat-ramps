import React from "react";
import { shallow } from "enzyme";
import MaterialList from "./MaterialList";
import { findByTestAttr } from "../../../test/testUtils";

describe("<MaterialList />", () => {
  const materials = [
    { label: "Bitumen", count: 7, active: false },
    { label: "Earth", count: 3, active: true },
    { label: "Concrete", count: 43, active: false }
  ];

  it("should render correct number of materials", () => {
    const wrapper = shallow(<MaterialList materials={materials} />);
    const materialRows = findByTestAttr(wrapper, "material");
    expect(materialRows.length).toBe(materials.length);
  });
});
