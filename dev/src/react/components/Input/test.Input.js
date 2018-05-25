import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

describe("Input", () => {
  let component, props;

  beforeEach(() => {
    // props = { name: "test",changeParentVal:(val) => {} };
    // component = shallow(<Input {...props} />);
  });

  // it('should', () => {
  //   expect(component).toMatchSnapshot()
  // })
  describe("フィールド入力確認", () => {
    it("呼び出し元変数変更　あり", () => {
      props = { name: "test", changeParentVal: val => {} };
      component = shallow(<Input {...props} />);
      component.find("#test").simulate("change", { target: { value: "abc" } });
      expect(component.state("val")).toBe("abc");
    });

    it("呼び出し元変数変更　なし", () => {
      props = { name: "test" };
      component = shallow(<Input {...props} />);
      component.find("#test").simulate("change", { target: { value: "abc" } });
      expect(component.state("val")).toBe("abc");
    });
  });

  it("初期値入力済み確認", () => {
    props = { name: "test", value: "" };
    component = shallow(<Input {...props} />);
    expect(component).toMatchSnapshot();
  });
});
