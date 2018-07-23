import React from "react";
import { storiesOf } from "@storybook/react";

import Time from "./Time";

storiesOf("Atoms/Time", module)
  .addDecorator(story => (
    <div style={{ backgroundColor: "#01579B", height: "3em", width: "3em" }}>
      {story()}
    </div>
  ))
  .add("現在日時", () => <Time />);
