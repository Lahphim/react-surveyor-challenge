const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@/layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@/theme/(.*)$': '<rootDir>/src/theme/$1',
  },
  modulePathIgnorePatterns: ['cypress'],
  resolver: '<rootDir>/.jest/resolver.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
