import React from "react";
import { shallow } from "enzyme";
import MaterialList from "./MaterialList";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";

const materials = [
  { label: "Bitumen", count: 7 },
  { label: "Earth", count: 3 },
  { label: "Concrete", count: 43 }
];

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<MaterialList materials={materials} store={store} />)
    .dive()
    .dive();
};

describe("<MaterialList />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "material-component");
    expect(component.length).toBe(1);
  });

  it("should render correct number of materials", () => {
    const materialRows = findByTestAttr(wrapper, "material");
    expect(materialRows.length).toBe(materials.length);
  });
});
