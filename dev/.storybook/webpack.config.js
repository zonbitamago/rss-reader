const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.target = "electron-main";
  // defaultConfig.optimization = {};

  return defaultConfig;
};
