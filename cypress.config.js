const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "rudmb7",
    setupNodeEvents(on, config) {
      // ok
    },
  },
});
