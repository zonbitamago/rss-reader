import React from "react";
import { mount } from "enzyme";
// import { createMount } from "material-ui/test-utils";

import RegistedListModal from "./RegistedListModal";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import { store } from "../../../../__mocks__/storeSettings";

describe("RegistedListModal", () => {
  let component, props, mockfn;

  beforeEach(() => {
    mockfn = jest.fn();
    props = {
      open: true,
      handleClose: mockfn,
      store: store,
      electronUtil: electronUtil
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
