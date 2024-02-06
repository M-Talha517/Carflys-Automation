const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    projectId: "vqtkby",
    baseUrl: "https://carflys-testing.vercel.app/",   //https://carflys-dev.vercel.app/
    pageLoadTimeout: 50000,
    requestTimeout: 50000,
    responseTimeout: 50000,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      // ok
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
