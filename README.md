
## Installation

```bash
$ npm install
```

## Run krakend api-gateway
```bash
docker run -p 8080:8080 -v $PWD:/etc/krakend/ devopsfaith/krakend
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

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
