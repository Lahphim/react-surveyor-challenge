const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/store$': '<rootDir>/src/store/index.ts',
    '^@/theme$': '<rootDir>/src/theme/index.ts',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@/layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@/reducers/(.*)$': '<rootDir>/src/reducers/$1',
  },
  modulePathIgnorePatterns: ['cypress'],
  resolver: '<rootDir>/.jest/resolver.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
