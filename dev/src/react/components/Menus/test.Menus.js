import React from "react";
import { shallow } from "enzyme";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import Menus from "./Menus";
import { store } from "../../../../__mocks__/storeSettings";

describe("Menus", () => {
  let component, props;

  beforeEach(() => {
    props = {
      electronUtil: electronUtil,
      store: store
    };
    component = shallow(<Menus {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
