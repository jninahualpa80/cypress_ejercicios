const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    "baseUrl": "https://www.saucedemo.com/",
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "videoUploadOnPasses": false,
    "video": false,
    "trashAssetsBeforeRuns": true,
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 100000,
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
