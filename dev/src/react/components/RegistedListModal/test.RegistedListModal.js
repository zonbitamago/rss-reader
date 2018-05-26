import React from "react";
import { mount } from "enzyme";
// import { createMount } from "material-ui/test-utils";

import RegistedListModal from "./RegistedListModal";

describe("RegistedListModal", () => {
  let component, props, mockfn;

  beforeEach(() => {
    mockfn = jest.fn();
    props = {
      open: true,
      handleClose: mockfn,
      registedlist: [
        { name: "google", url: "https://www.google.co.jp/" },
        { name: "yahoo", url: "https://www.yahoo.co.jp/" }
      ]
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

  // it("rss・twitter登録なし", () => {
  //   props = {
  //     open: true,
  //     handleClose: mockfn,
  //     registedlist: []
  //   };
  //   component = createMount(<RegistedListModal {...props} />);
  //   expect(component).toMatchSnapshot();
  // });
});
