import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "./Input";

storiesOf("Atoms/Input", module)
  .add("URL", () => <Input name="URL" />)
  .add("Name", () => <Input name="Name" />)
  .add("UpdateDuration", () => <Input name="UpdateDuration" value="5" />);
