const { defineConfig } = require("cypress");
require("dotenv").config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:`http://${process.env.HOST}:9000/api/v1`,
    video:false,
    screenshotOnRunFailure:false
  },
});
