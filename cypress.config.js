const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  taskTimeout: 10000,
  projectId: "hgsdjy",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "https://mockapi.rapidextras.com",
  }
});
