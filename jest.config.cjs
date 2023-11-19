module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  extensionsToTreatAsEsm: ['.jsx, .tsx, .ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  automock: false,
  setupFiles: ['./src/setupTests.ts'],
};
