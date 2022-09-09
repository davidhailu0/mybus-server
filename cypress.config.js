const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:`http://${process.env.HOST}:9000/api`,
    video:false,
    screenshotOnRunFailure:false
  },
});
