# mongo-api

This is a wrapper to provide a single `get` route:
`/api/scores/all`
that connects to a remote mongodb

[dotenv](https://www.npmjs.com/package/dotenv) package is used for local environment variables:
```js
PORT=3001
MONGODB_URI=
NODE_ENV=dev
```

[concurrently](https://www.npmjs.com/package/concurrently) package is used to start both server and react dev server
