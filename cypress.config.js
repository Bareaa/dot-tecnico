const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    experimentalRunAllSpecs: true,
    failOnStatusCode: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
