module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    moduleNameMapper: {
      "src/(.*)": "<rootDir>/src/$1",
      "tests/(.*)": "<rootDir>/tests/$1",
    },
    watchPathIgnorePatterns: ["globalConfig"],
    modulePaths: ["<rootDir>/tests/"],
  };
  