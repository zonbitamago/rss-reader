import React from "react";
import { storiesOf } from "@storybook/react";

import SettingModal from "./SettingModal";
import { store } from "../../../../__mocks__/storeSettings";

storiesOf("Organisms/SettingModal", module).add("open", () => (
  <SettingModal
    open={true}
    handleClose={() => {
      console.log("test");
    }}
    store={store}
  />
));
