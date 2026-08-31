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
    "android.debug": {
      type: "android.apk",

      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",

      build:
        "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug",
    },
  },

  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 17 Pro",
      },
    },
    android: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_8_API_35",
      },
    },
  },

  configurations: {
    "ios.sim.debug": {
      device: "simulator",
      app: "ios.debug",
    },
    "android.emu.debug": {
      device: "android",
      app: "android.debug",
    },
  },
  // artifacts: {
  //   rootDir: "./artifacts",
  //   plugins: {
  //     screenshot: {
  //       enabled: true,
  //       keepOnlyFailedTests: true,
  //     },
  //   },
  // },
};
