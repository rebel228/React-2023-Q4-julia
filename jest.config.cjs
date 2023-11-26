const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  verbose: true,
  extensionsToTreatAsEsm: ['.jsx, .tsx, .ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  automock: false,
};

module.exports = createJestConfig(customJestConfig);
