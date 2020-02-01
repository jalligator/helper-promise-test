# helper-promise-test

This is an example app that demos store.findAll causing a "Maximum call stack size exceeded" error. It demos the error three modes:

1) using store as an injected service in a helper
2) looking up the store service without injecting it per se and using the store in a helper
3) using store as an injected service in a component and yielding the result of findAll as a block parameter

Trying to use the result of the findAll in a component causes the error.

The only workaround I've been able to find is for mode 3. If the value getter is a computed field with no parameters, then the error doesn't occur.

The application.hbs has both the helper syntax examples commented out. If you restore one of them, you will get the error. You can also change the my-records-component.js file to comment out the @computed decorator and cause the error in mode 3.

This app uses ember-local-storage so we can use findAll. I have found the same behavior, however, with my production API though. Also, make sure you empty your local storage when done!

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd helper-promise-test`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
