import React from "react";
import { storiesOf } from "@storybook/react";

import RssListItem from "./RssListItem";
import List from "material-ui/List";

storiesOf("Atoms/RssListItem", module)
  .addDecorator(story => <List>{story()}</List>)
  .add("RssListItem", () => (
    <RssListItem text="sample" url="https://www.google.co.jp/" />
  ));
