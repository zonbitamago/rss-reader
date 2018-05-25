import React from "react";
import { shallow } from "enzyme";

import SettingModal from "./SettingModal";
import { store } from "../../../../__mocks__/storeSettings";

describe("SettingModal", () => {
  let component, props;

  beforeEach(() => {
    props = { store: store };
    component = shallow(<SettingModal {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
