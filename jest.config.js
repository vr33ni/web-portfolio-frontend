module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    ".*\\.(js)$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testEnvironment: "jsdom",
};
