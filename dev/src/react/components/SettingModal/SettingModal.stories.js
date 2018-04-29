import React from "react";
import { storiesOf } from "@storybook/react";

import SettingModal from "./SettingModal";

storiesOf("Organisms/SettingModal", module).add("open", () => (
  <SettingModal
    open={true}
    handleClose={() => {
      console.log("test");
    }}
  />
));
