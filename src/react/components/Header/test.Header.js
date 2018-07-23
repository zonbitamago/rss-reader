import React from "react";
import { shallow, mount } from "enzyme";
import $ from "jquery";
import { store } from "../../../../__mocks__/storeSettings";

import Header from "./Header";

jest.mock("jquery");

describe("Header", () => {
  let component, props;

  beforeEach(() => {
    props = { store: store };
    component = shallow(<Header {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });

  it("Home Icon Click", () => {
    $.mockImplementation(() => {
      return {
        animate: selector => {
          return;
        }
      };
    });
    var wrapper = mount(<Header {...props} />);

    wrapper.find(".Header-Left .Icon svg").simulate("click");
    expect($.mock.calls.length).toBe(1);
  });
});
