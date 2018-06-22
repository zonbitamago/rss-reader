import React from "react";
import { shallow } from "enzyme";
import { store } from "../../../../__mocks__/storeSettings";

import Header from "./Header";

describe("Header", () => {
  let component, props;

  beforeEach(() => {
    props = { store: store };
    component = shallow(<Header {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
