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

Response:

```json
[
  {
    "name": "Bash",
    "price": 10,
    "multiplier": 0.1
  },
  {
    "name": "Git",
    "price": 100,
    "multiplier": 1.2
  },
  {
    "name": "Javascript",
    "price": 10000,
    "multiplier": 14
  },
  {
    "name": "React",
    "price": 50000,
    "multiplier": 75
  },
  {
    "name": "Vim",
    "price": 1000000,
    "multiplier": 10000
  }
]
```
