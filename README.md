# Gitclicker API

## Requirements

- `node >= v15.11.0` (Might work for lower version but not tested)

## Install

```bash
cp .env.dist .env
yarn install
```

## Run dev

```bash
yarn dev
```

## Enpoints

### `GET /api/shop/items`

Response: HTTP 200

```json
[
  {
    "name": "Bash",
    "price": 10,
    "linesPerMillisecond": 0.1
  },
  {
    "name": "Git",
    "price": 100,
    "linesPerMillisecond": 1.2
  },
  {
    "name": "Javascript",
    "price": 10000,
    "linesPerMillisecond": 14
  },
  {
    "name": "React",
    "price": 50000,
    "linesPerMillisecond": 75
  },
  {
    "name": "Vim",
    "price": 1000000,
    "linesPerMillisecond": 10000
  }
]
```

### `GET /api/shop/items/:id`

Response: HTTP 200

```json
{
  "name": "Bash",
  "price": 10,
  "linesPerMillisecond": 0.1
}
```

### `POST /api/shop/items`

Body:

```json
{
  "name": "Svelte",
  "price": 40000,
  "linesPerMillisecond": 45.0
}
```

Response: HTTP 201

```json
{
  "id": 1615820488694,
  "name": "Svelte",
  "price": 40000,
  "linesPerMillisecond": 45.0
}
```

### `PUT /api/shop/items/:id`

Body:

```json
{
  "name": "Svelte",
  "price": 40000,
  "linesPerMillisecond": 45.0
}
```

Response: HTTP 200

```json
{
  "id": 1615820488694,
  "name": "Svelte",
  "price": 40000,
  "linesPerMillisecond": 45.0
}
```

### `DELETE /api/shop/items/:id`

Response: HTTP 204
