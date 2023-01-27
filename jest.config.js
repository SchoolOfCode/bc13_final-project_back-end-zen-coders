export const testEnvironment = "node";
export const coverageThreshold = {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
  roots: ["./", "../more-files/"],
};
export const transform = {
  "^.+\\.js$": "babel-jest",
};

export default { testEnvironment, coverageThreshold, transform };
