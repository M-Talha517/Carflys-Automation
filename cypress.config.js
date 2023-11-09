const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rj4v1f",
  e2e: {
    projectId: "zxbhgd",
    setupNodeEvents(on, config) {
      // ok
    },
  },
});
