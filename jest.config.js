const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/config$': '<rootDir>/src/config/index.ts',
    '^@/store$': '<rootDir>/src/store/index.ts',
    '^@/theme$': '<rootDir>/src/theme/index.ts',
    '^@/adapters/(.*)$': '<rootDir>/src/adapters/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@/helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/reducers/(.*)$': '<rootDir>/src/reducers/$1',
    '^@/tests/(.*)$': '<rootDir>/src/tests/$1',
  },
  modulePathIgnorePatterns: ['cypress'],
  resolver: '<rootDir>/.jest/resolver.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
