import initStoryshots from "@storybook/addon-storyshots";
import mockdate from "mockdate";

mockdate.set(new Date(2017, 5, 15, 7, 12, 5));
initStoryshots({
  /* configuration options */
});
