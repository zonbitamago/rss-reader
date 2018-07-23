import React from "react";
import { storiesOf } from "@storybook/react";
import { store } from "../../../../__mocks__/storeSettings";

import Header from "./Header";

storiesOf("Organisms/Header", module).add("Header", () => (
  <Header store={store} />
));
