Tech:

Testing
Mocha - test runner
Enzyme - querying react components and some assertions
Chai - assertions

Build
Webpack - dev server, generating a html page, compiling css and js
Babel - ES6
Express - stub API server

Libraries
React - as asked for
react-modal - popup when clicking on loans
PostCSS - Sass-like features (other useful plugins can be added later if needed)

Type checking added but API response is currently not being converted to correct types.
Introducing Redux would solve the problem (explain where in redux this would be handled...)

A stub API has been created under `scripts/api-server.js`. This API has been called in `src/index.js`, but again, this responsibility can also be handled by Redux.

Future steps would include:
Use Redux stores for holding state, async actions for API calls.
Fix enzyme querying on certain tests
Use css modules to include css in React components
