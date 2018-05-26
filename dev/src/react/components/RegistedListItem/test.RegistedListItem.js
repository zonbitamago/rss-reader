import React from "react";
import { shallow } from "enzyme";

import RegistedListItem from "./RegistedListItem";

describe("RegistedListItem", () => {
  let component, props;

  beforeEach(() => {
    props = { name: "test", url: "https://google/co.jp" };
    component = shallow(<RegistedListItem {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
