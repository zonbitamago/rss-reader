import React from "react";
import { shallow } from "enzyme";

import DomainIcon from "./DomainIcon";

describe("DomainIcon", () => {
  let component, props;

  beforeEach(() => {
    props = { src: "http://www.google.com/s2/favicons?domain=qiita.com" };
    component = shallow(<DomainIcon {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
