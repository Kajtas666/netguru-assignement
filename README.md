## General info
This project is Kajetan Kurkiewicz's Netguru recruitment automation assignement.

## Requirements
This project requires latest version of Node.js. You can download it from here https://nodejs.org/en/.

It uses Cypress as a framework for UI tests automation.

## Instalation
To run this repository, firslty install all dependencies locally with npm. Open console in project directory and type
```
$ npm install
```
After Cypress and other packages are installed, you are ready to run tests.

## Running tests
To run tests you can either use Cypress GUI or run them through console. 

### To open GUI 
Type 
```
npx cypress open 
```
to console and follow GUI steps.

### To run test in console
Use command 
```
npx cypress run
```
to run all tests in this repository. 

You may also specify a spec (test scenario) you want to run using --spec param followed with file path.

For example:
```
npx cypress run --spec "cypress/e2e/spec.cy.js"
```
By default Cypress test run in console headless. If you want to open browser, add --headed param to the command:

```
npx cypress run --spec "cypress/e2e/spec.cy.js" --headed
```

