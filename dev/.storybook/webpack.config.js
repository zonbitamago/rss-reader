const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  console.log(defaultConfig);
  // Extend defaultConfig as you need.

  defaultConfig.target = "electron-main";
  // defaultConfig.optimization = {};

  return defaultConfig;
};
