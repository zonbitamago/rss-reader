import React from "react";
import { storiesOf } from "@storybook/react";

import Side from "./Side";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import { store } from "../../../../__mocks__/storeSettings";

storiesOf("Organisms/Side", module).add("Side", () => (
  <Side electronUtil={electronUtil} store={store} />
));
