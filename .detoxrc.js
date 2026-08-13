/** @type {Detox.DetoxConfig} */

module.exports = {
  testRunner: {
    args: {
      $0: "jest",
      config: "e2e/jest.config.js",
    },
  },

  apps: {
    "ios.debug": {
      type: "ios.app",

      binaryPath:
        "ios/build/Build/Products/Debug-iphonesimulator/todoapprn.app",

      build:
        "xcodebuild " +
        "-workspace ios/todoapprn.xcworkspace " +
        "-scheme todoapprn " +
        "-configuration Debug " +
        "-sdk iphonesimulator " +
        "-derivedDataPath ios/build",
    },
  },

  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 17 Pro",
      },
    },
  },

  configurations: {
    "ios.sim.debug": {
      device: "simulator",
      app: "ios.debug",
    },
  },
};
