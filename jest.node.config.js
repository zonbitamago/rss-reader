// jest.config.js
module.exports = {
  verbose: true,
  testMatch: ["<rootDir>/src/react/util/**/(spec|test)(.*).js?(x)"],
  collectCoverage: true,
  testEnvironment: "node",
  coverageDirectory: "coverage_node"
};
