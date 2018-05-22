import initStoryshots from "@storybook/addon-storyshots";
import mockdate from "mockdate";
// import { mount } from "enzyme";
import { createMount } from "@material-ui/core/test-utils";

mockdate.set(new Date(2017, 5, 15, 7, 12, 5));
initStoryshots({
  // renderer: mount
  // Portalをサポートできていないため、material-uiのmountを利用する。
  // https://github.com/mui-org/material-ui/issues/9243
  renderer: createMount
});
