module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.css$',
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },


};
