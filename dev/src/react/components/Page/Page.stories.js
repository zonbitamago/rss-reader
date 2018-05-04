import React from "react";
import { storiesOf } from "@storybook/react";

import Page from "./Page";

const electronUtil = {
  closeApp: () => {
    console.log("closeApp");
  },
  minimizeApp: () => {
    console.log("minimizeApp");
  },
  openBrowser: url => {
    console.log("openBrowser");
    console.log(url);
  }
};

storiesOf("Pages/Page", module).add("Page", () => (
  <Page electronUtil={electronUtil} />
));
