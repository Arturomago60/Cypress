const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gaf8ka",
  retries: { runMode: 2, openMode: 0 },
  video: false,
  screenshotOnRunFailure: true,
  viewportWidth: 1200,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 100000,
  e2e: {
    baseUrl: "https://automationexercise.com/",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js",
    ],
  },
});
