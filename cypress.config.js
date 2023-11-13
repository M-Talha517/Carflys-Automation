const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "1h9e4k",
    setupNodeEvents(on, config) {
      // ok
    },
  },
});
