import React from "react";
import { storiesOf } from "@storybook/react";

import Time from "./Time";

storiesOf("Atoms/Time", module)
  .addDecorator(story => (
    <div style={{ backgroundColor: "#263238" }}>{story()}</div>
  ))
  .add("現在日時", () => <Time />);
