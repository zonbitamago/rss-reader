import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("Button yes", () => {
  let component, props;

  beforeEach(() => {
    props = { type: "yes" };
    component = shallow(<Button {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("Button no", () => {
  let component, props;

  beforeEach(() => {
    props = { type: "no" };
    component = shallow(<Button {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("Button else", () => {
  let component, props;

  beforeEach(() => {
    props = { type: "else" };
    component = shallow(<Button {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
