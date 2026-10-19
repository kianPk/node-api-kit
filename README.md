# Node API Kit

Production-style **Express** starter for website backends.

[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/express-4-000000?style=flat-square)](https://expressjs.com)
[![Zod](https://img.shields.io/badge/validation-zod-3e67b1?style=flat-square)](https://zod.dev)
[![License: MIT](https://img.shields.io/badge/license-MIT-0f1a22?style=flat-square)](./LICENSE)

## What's inside

- Route modules + `/api/v1`
- Zod validation middleware
- JWT-ready `requireAuth`
- Consistent JSON error shape
- CORS + `/health`

## Quick start

```bash
npm i
npm run dev
curl http://localhost:3000/health
curl http://localhost:3000/api/v1/items
```

```bash
curl -X POST http://localhost:3000/api/v1/items \
  -H 'Authorization: Bearer demo' \
  -H 'Content-Type: application/json' \
  -d '{"title":"ship it"}'
```

MIT · [@kianPk](https://github.com/kianPk)
