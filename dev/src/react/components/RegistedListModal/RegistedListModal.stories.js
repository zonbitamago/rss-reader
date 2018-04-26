// jest.mock("rc-util/lib/Portal");
import React from "react";
import { storiesOf } from "@storybook/react";

import RegistedListModal from "./RegistedListModal";

storiesOf("Organisms/RegistedListModal", module).add("open", () => (
  <div>
    <RegistedListModal
      open={true}
      handleClose={() => {
        console.log("test");
      }}
    />
  </div>
));
