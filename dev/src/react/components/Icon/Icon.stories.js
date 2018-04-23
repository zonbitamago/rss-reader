import React from "react";
import { storiesOf } from "@storybook/react";
import Refresh from "@material-ui/icons/Refresh";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import Home from "@material-ui/icons/Home";
import RssFeed from "@material-ui/icons/RssFeed";
import IndeterminateCheckBox from "@material-ui/icons/IndeterminateCheckBox";
import Settings from "@material-ui/icons/Settings";
import Github from "react-icons/lib/go/mark-github";
import Twitter from "react-icons/lib/ti/social-twitter";

import Icon from "./Icon";

storiesOf("Atoms/Icon/Side", module)
  .addDecorator(story => (
    <div style={{ backgroundColor: "#01579B", height: "3em", width: "3em" }}>
      {story()}
    </div>
  ))
  .add("Power", () => (
    <Icon>
      <PowerSettingsNew />
    </Icon>
  ))
  .add("Refresh", () => (
    <Icon>
      <Refresh />
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
      <Github />
    </Icon>
  ));

storiesOf("Atoms/Icon/Header", module)
  .addDecorator(story => (
    <div style={{ backgroundColor: "#039BE5", height: "3em", width: "3em" }}>
      {story()}
    </div>
  ))
  .add("Home", () => (
    <Icon>
      <Home />
    </Icon>
  ))
  .add("RssFeed", () => (
    <Icon>
      <RssFeed />
    </Icon>
  ))
  .add("Twitter", () => (
    <Icon>
      <Twitter />
    </Icon>
  ));
