import React from "react";
import { storiesOf } from "@storybook/react";

import Menus from "./Menus";

storiesOf("Molecules/Menus", module)
  .addDecorator(story => (
    <div style={{ backgroundColor: "#0D47A1", height: "18em", width: "3em" }}>
      {story()}
    </div>
  ))
  .add("Side Menu", () => <Menus />);
