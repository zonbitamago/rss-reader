import React from "react";
import { shallow } from "enzyme";
import mockdate from "mockdate";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";

import Item from "./Item";

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
});
