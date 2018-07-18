const { defaults } = require('jest-config');

module.exports = {
  collectCoverageFrom: ['**/src/*.{js,ts}'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  testRegex: '\\.test\\.(j|t)s$',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
};
