import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("Button", () => {
  let component, props, component2, props2;

  beforeEach(() => {
    props = { type: "yes" };
    component = shallow(<Button {...props} />);
    props2 = { type: "no" };
    component2 = shallow(<Button {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
    expect(component2).toMatchSnapshot();
  });
});
