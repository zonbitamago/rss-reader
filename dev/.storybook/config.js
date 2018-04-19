import { configure } from "@storybook/react";
const req = require.context("../src/react/components", true, /\.stories\.js$/);

function loadStories() {
  // require("../stories/index.js");
  // You can require as many stories as you need.
  // require("../src/components/Button/Button.stories.js");

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
