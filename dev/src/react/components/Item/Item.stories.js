import React from "react";
import { storiesOf } from "@storybook/react";

import Item from "./Item";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";

storiesOf("Molecules/Item", module).add("Item", () => (
  <Item
    src="http://www.google.com/s2/favicons?domain=qiita.com"
    domainName="Qiita.com"
    url="https://qiita.com/kura07/items/e633b35e33e43240d363"
    itemName="CSS Grid Layout を極める！（基礎編）"
    date={new Date(2017, 10, 15, 7, 12, 5).getTime()}
    electronUtil={electronUtil}
  />
));
