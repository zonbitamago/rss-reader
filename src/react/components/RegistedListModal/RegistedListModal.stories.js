// jest.mock("rc-util/lib/Portal");
import React from "react";
import { storiesOf } from "@storybook/react";
import RegistedListModal from "./RegistedListModal";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import { store } from "../../../../__mocks__/storeSettings";

storiesOf("Organisms/RegistedListModal", module).add("open", () => (
  <div>
    <RegistedListModal
      open={true}
      handleClose={() => {
        console.log("test");
      }}
      store={store}
      electronUtil={electronUtil}
    />
  </div>
));
