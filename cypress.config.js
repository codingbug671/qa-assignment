const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  },
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    defaultCommandTimeout: 10000, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
   
    },
     testIsolation: false,
  },
  
});
