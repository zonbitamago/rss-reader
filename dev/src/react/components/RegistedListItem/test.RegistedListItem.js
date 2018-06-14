import React from "react";
import { shallow } from "enzyme";

import RegistedListItem from "./RegistedListItem";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import { store } from "../../../../__mocks__/storeSettings";

describe("RegistedListItem", () => {
  let component, props;

  beforeEach(() => {
    props = {
      name: "test",
      url: "https://google/co.jp",
      electronUtil: electronUtil,
      store: store
    };
    component = shallow(<RegistedListItem {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
