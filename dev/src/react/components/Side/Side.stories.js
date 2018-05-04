import React from "react";
import { storiesOf } from "@storybook/react";

import Side from "./Side";

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

storiesOf("Organisms/Side", module).add("Side", () => (
  <Side electronUtil={electronUtil} />
));
