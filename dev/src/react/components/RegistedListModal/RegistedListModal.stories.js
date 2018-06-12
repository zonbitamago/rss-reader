// jest.mock("rc-util/lib/Portal");
import React from "react";
import { storiesOf } from "@storybook/react";
import RegistedListModal from "./RegistedListModal";
import { store } from "../../../../__mocks__/storeSettings";

storiesOf("Organisms/RegistedListModal", module).add("open", () => (
  <div>
    <RegistedListModal
      open={true}
      handleClose={() => {
        console.log("test");
      }}
      store={store}
    />
  </div>
));
