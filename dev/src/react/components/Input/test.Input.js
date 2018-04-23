import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

describe("Input", () => {
  let component, props;

  beforeEach(() => {
    props = { name: "test" };
    component = shallow(<Input {...props} />);
  });

  // it('should', () => {
  //   expect(component).toMatchSnapshot()
  // })
  it("フィールド入力確認", () => {
    component.find("#test").simulate("change", { target: { value: "abc" } });
    expect(component.state("val")).toBe("abc");
  });
});
