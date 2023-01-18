const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://guitarcenter.pl/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
