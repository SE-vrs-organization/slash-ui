module.exports = {
  preset: "ts-jest/presets/default-esm", // Support for TypeScript with ES modules
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    // Mock out axios to avoid ES import issues
    "^axios$": require.resolve("axios"),
  },
};
