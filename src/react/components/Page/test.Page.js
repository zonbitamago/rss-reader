import React from "react";
import { shallow } from "enzyme";
import { store } from "../../../../__mocks__/storeSettings";

import Page from "./Page";

describe("Page", () => {
  let component, props;

  it("should", () => {
    props = { store: store };
    component = shallow(<Page {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("Exists Items", () => {
    var items = [];
    var item = {
      src: "http://www.google.com/s2/favicons?domain=qiita.com",
      domainName: "Qiita.com",
      url: "https://qiita.com/kura07/items/e633b35e33e43240d363",
      itemName: "CSS Grid Layout を極める！（基礎編）",
      date: new Date(2017, 10, 15, 7, 12, 5).getTime()
    };
    for (let index = 0; index < 10; index++) {
      items.push(item);
    }
    store.ItemStore.items = items;

    props = { store: store };
    component = shallow(<Page {...props} />);
    expect(component).toMatchSnapshot();
  });
});
