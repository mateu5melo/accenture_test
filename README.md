
# Cypress Framework - Insurance Quote Demo Application

This repository contains the automated test for submitting an automobile insurance request in the demo application: https://sampleapp.tricentis.com/101/index.php

## Resources

- **E2E Tests**: Mimic user interactions by automating browser control.


## Getting started

To get started with using Cypress in Insurance Quote Demo Application, follow the steps below:

    1. Clone the repository to your local machine.
    2. Access the root of cloned repository(/accenture_test)
    3. Install the dependencies with 'npm install'.
    4. Open the Cypress interface with 'npx cypress open'.
    5. Select the E2E test option.
    6. Select a browser to run the tests.
    7. Select the feature you want to run the tests for.

For more information, see the official Cypress documentation.



## The repository is organized as follows:

    cypress/e2e/Tests/${feature}: 
        This directory contains the Cucumber feature files, each defining a set of scenarios for a specific feature and the step definitions for the Cucumber steps.
    cypress/support/: 
        This directory contains supporting files, such as common  methods for tests, environment configuration and hooks.
