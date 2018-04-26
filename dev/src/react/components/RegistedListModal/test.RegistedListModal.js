import React from "react";
import { mount } from "enzyme";

import RegistedListModal from "./RegistedListModal";

describe("RegistedListModal", () => {
  let component, props, mockfn;

  beforeEach(() => {
    mockfn = jest.fn();
    props = {
      open: true,
      handleClose: mockfn
    };
    component = mount(<RegistedListModal {...props} />);
  });

  it("yesボタンクリック", () => {
    component.find(".Button > #yes").simulate("click");
    expect(mockfn.mock.calls.length).toBe(1);
  });

  it("noボタンクリック", () => {
    component.find(".Button > #no").simulate("click");
    expect(mockfn.mock.calls.length).toBe(1);
  });
});
