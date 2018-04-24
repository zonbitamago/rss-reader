import React from "react";
import { shallow } from "enzyme";

import RssListItem from "./RssListItem";

describe("RssListItem", () => {
  let component, props;

  beforeEach(() => {
    props = { text: "test", url: "https://google/co.jp" };
    component = shallow(<RssListItem {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
