const { defineConfig } = require("cypress")
const createBundler  = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config)
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  )
  return config
}

module.exports = defineConfig({
  e2e: {
      baseUrl: "https://sampleapp.tricentis.com/101",
      specPattern: "cypress/e2e/Tests/**/*.feature",
      requestTimeout: 25000,
      setupNodeEvents,
    },  
})
