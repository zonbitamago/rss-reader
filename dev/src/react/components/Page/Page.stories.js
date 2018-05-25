import React from "react";
import { storiesOf } from "@storybook/react";

import Page from "./Page";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import { store } from "../../../../__mocks__/storeSettings";

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
storiesOf("Pages/Page", module).add("Page", () => (
  <Page electronUtil={electronUtil} items={items} store={store} />
));
