import React from "react";
import { storiesOf } from "@storybook/react";

import Menus from "./Menus";

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

storiesOf("Molecules/Menus", module)
  .addDecorator(story => (
    <div style={{ backgroundColor: "#01579B", height: "18em", width: "3em" }}>
      {story()}
    </div>
  ))
  .add("Side Menu", () => <Menus electronUtil={electronUtil} />);
