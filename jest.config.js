
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue3-jest'
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(uuid)/)"
  ],
  automock: false,
  resetMocks: false,
  setupFiles: [
    './setupJest.js'
  ]
}
