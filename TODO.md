# Validation
- successOrThrow/validateOrFail
-
# Http
- Bun route builder
- Middleware
- Error handling
- Validation
  - Query
  - Body
  - Params
  - Headers
  - Cookies
  - Response
- Request/Response logging
- Request/Response metrics
- Request/Response tracing




# Fetch
- Basé sur `ky`
- J'envois toujours du JSON, et je reçois toujours du JSON
- retry exponentielle (backoff)
- retries selon certains statuts HTTP
- timeout
- Reponse typé et validé
- Body typé et validé

- Fetch fortement typé

- [error, data] fetchOrFail
- https://github.com/erfanium/fetch-typebox

- Inspiration:
  - https://better-fetch.vercel.app/
  - https://github.com/L-Blondy/up-fetch

# Log


# Tests
- Faker avec unique

# Utils
- Builder pattern
- Message Pack with msgpackr?

# NPM
- https://www.npmjs.com/package/release-it
