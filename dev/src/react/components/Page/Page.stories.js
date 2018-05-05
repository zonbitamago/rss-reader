import React from "react";
import { storiesOf } from "@storybook/react";

import Page from "./Page";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";

storiesOf("Pages/Page", module).add("Page", () => (
  <Page electronUtil={electronUtil} />
));
