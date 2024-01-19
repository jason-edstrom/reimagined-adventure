export default {
  "testResultsProcessor": "jest-sonar-reporter",
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": [
    "**/*.(t|j)s"
  ],
  "coveragePathIgnorePatterns": [
    ".module.ts$"
  ],
  "coverageDirectory": "./coverage/nestjs-starter-rest-api",
  "testEnvironment": "node",
  "displayName": "nestjs-starter-rest-api",
  "testMatch": [
    "<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)"
  ],
  "preset": "./jest.preset.js"
}