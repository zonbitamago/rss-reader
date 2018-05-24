// jest.config.js
module.exports = {
  verbose: true,
  testMatch: ["**/(spec|test)(.*).js?(x)"],
  collectCoverage: true,
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    // "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  setupFiles: ["<rootDir>/enzyme.setup.js", "jest-localstorage-mock"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
