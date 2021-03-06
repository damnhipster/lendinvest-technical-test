LendInvest Coding Test
======================

![LendInvest Dashboard](resources/Screen%20Shot%202017-03-20%20at%2002.18.28.png)

## Running
Requires **Node.js 6.2.2**

Commands:
- `npm start`
- `npm test`

## Technologies

The entire stack was built from scratch and no boilerplate/scaffolding was used.

### Testing
- **Mocha** - test runner
- **Enzyme** - querying react components and some assertions
- **Chai** - assertions

### Build
- **Webpack** - dev server, generating a html page, compiling css and js
- **Babel** - ES6
- **Express** - stub API server

### Libraries
- **React** - as asked for
- **react-modal** - popup when clicking on loans
- **moment.js** - formatting time
- **PostCSS** - Sass-like features (other useful plugins can be added later if needed)
- **outnet-2015** - style library (written by me) 

Type checking has been added but the API response is currently being converted to correct types in a [crude way](src/lib/components/CurrentLoans.jsx#L11).
Introducing Redux should solve the problem, using reducers on the API response before putting it in a store.

A [stub API](scripts/api-server.js) has been created. This API response has been [fetched](src/index.js#L15), but again, this responsibility can also be handled by Redux.

I would generally squash my commits into a more concise log to make things easier to track, but I've left them as is so my development process can be reviewed.


Future steps would include:
- Use Redux stores for holding state, async actions for API calls.
- Fix enzyme querying on certain tests.
- Use css modules to include css in React components rather than a global stylesheet.

## Test results:
![Image of results](resources/test-results.png)
