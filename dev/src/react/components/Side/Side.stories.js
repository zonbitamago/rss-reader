import React from "react";
import { storiesOf } from "@storybook/react";

import Side from "./Side";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";

storiesOf("Organisms/Side", module).add("Side", () => (
  <Side electronUtil={electronUtil} />
));
