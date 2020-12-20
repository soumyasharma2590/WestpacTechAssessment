# Test Suite for Westpac Kiwisaver Calculator page

## Installation
1. Install NPM using the instructions [here](https://www.npmjs.com/get-npm).
2. Install Cypress using the instructions [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements).
3. Clone the repo to the local machine.

## To run tests
Run the following command from the directory of the cloned repository. 
```./node_modules/.bin/cypress open```

Click on the KiwiSaverCalculator.js file to run. By default, Cypress will select the Chrome browser to run the tests (if Chrome is installed). Otherwise the browser can be selected via the dropdown on the top right corner before selecting to the test to run. 

or, to run headless
```./node_modules/.bin/cypress run ```

### To run specific test case

Open the KiwiSaverCalculator.js in an editor such as CodeInsiders and add '.only' to the specific test case. For example 
```it.only('shows the help text for a field when the user clicks on the information icon.', function () {```

or
```./node_modules/.bin/cypress run -b chrome --spec 'cypress/integration/<filename>.js'```