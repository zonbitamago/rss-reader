import React from "react";
import { storiesOf } from "@storybook/react";

import RegistedListItem from "./RegistedListItem";
import List from "material-ui/List";

storiesOf("Atoms/RegistedListItem", module)
  .addDecorator(story => <List>{story()}</List>)
  .add("RegistedListItem", () => (
    <RegistedListItem text="sample" url="https://www.google.co.jp/" />
  ));
