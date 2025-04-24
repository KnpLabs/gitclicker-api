import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import { itemsRouter } from './items/items.router'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = Number.parseInt(process.env.PORT as string, 10)

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api/shop/items', itemsRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
