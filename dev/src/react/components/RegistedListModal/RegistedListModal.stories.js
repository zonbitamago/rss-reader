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
      registedlist={[
        { name: "google", url: "https://www.google.co.jp/" },
        { name: "yahoo", url: "https://www.yahoo.co.jp/" }
      ]}
    />
  </div>
));
