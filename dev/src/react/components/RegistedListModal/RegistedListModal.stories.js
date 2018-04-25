import React from "react";
import { storiesOf } from "@storybook/react";

import RegistedListModal from "./RegistedListModal";

storiesOf("Organisms/RegistedListModal", module).add(
  "RegistedListModal",
  () => (
    <div>
      <RegistedListModal open={true} handleClose={() => {}} />
    </div>
  )
);
