import { shallow, mount } from "enzyme";
import mockdate from "mockdate";
import React from "react";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import Item from "./Item";

jest.mock("../../../../__mocks__/electronUtilSettings");

describe("Item", () => {
  let component, props;

  beforeEach(() => {
    mockdate.set(new Date(2017, 10, 15, 7, 12, 5));
    var timeMS = new Date(2017, 10, 15, 7, 12, 5).getTime();
    props = {
      src: "http://www.google.com/s2/favicons?domain=qiita.com",
      domainName: "Qiita.com",
      url: "https://qiita.com/kura07/items/e633b35e33e43240d363",
      itemName: "CSS Grid Layout を極める！（基礎編）",
      date: timeMS,
      electronUtil: electronUtil
    };
    component = shallow(<Item {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });

  it("link click", () => {
    var wrapper = mount(<Item {...props} />);
    wrapper.find(".bottom a").simulate("click");

    expect(electronUtil.openBrowser.mock.calls.length).toBe(1);
  });
});
