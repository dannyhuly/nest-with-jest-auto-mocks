# NestJS with Jest Auto-Mocks

## Description
The follwing code is a simple example of `Jest` auto-mock ability in a `NestJS` (or Typescript) project that doesn't skip out on typeing.

* [app.service.mock.ts](./src/app.service.mock.ts) - Mock instencr util
* [app.controller.spec.ts](./src/app.controller.spec.ts) - Mock usage

### Motivation
I wanted a simple "system" where each class will expose a `Mock` instence util along side the main class.
This approach will help when extending and refactoring the code base.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).
