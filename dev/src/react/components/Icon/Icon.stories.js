import React from "react";
import { storiesOf } from "@storybook/react";
import Refresh from "@material-ui/icons/Refresh";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import RssFeed from "@material-ui/icons/RssFeed";
import IndeterminateCheckBox from "@material-ui/icons/IndeterminateCheckBox";
import Settings from "@material-ui/icons/Settings";
import Help from "@material-ui/icons/Help";

import Icon from "./Icon";

storiesOf("Atoms/Icon", module)
  .addDecorator(story => (
    <div style={{ backgroundColor: "#263238", height: "3em", width: "3em" }}>
      {story()}
    </div>
  ))
  .add("Refresh", () => (
    <Icon>
      <Refresh />
    </Icon>
  ))
  .add("Power", () => (
    <Icon>
      <PowerSettingsNew />
    </Icon>
  ))
  .add("RssFeed", () => (
    <Icon>
      <RssFeed />
    </Icon>
  ))
  .add("IndeterminateCheckBox", () => (
    <Icon>
      <IndeterminateCheckBox />
    </Icon>
  ))
  .add("Settings", () => (
    <Icon>
      <Settings />
    </Icon>
  ))
  .add("Help", () => (
    <Icon>
      <Help />
    </Icon>
  ));