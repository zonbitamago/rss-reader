import React from "react";
import { shallow } from "enzyme";
import { store } from "../../../../__mocks__/storeSettings";

import Page from "./Page";

describe("Page", () => {
  let component, props;

  beforeEach(() => {
    props = { store: store };
    component = shallow(<Page {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
