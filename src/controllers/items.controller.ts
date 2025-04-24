import * as service from '@/services/items.service'
import { OpenAPIHono } from '@hono/zod-openapi'
import { getAllRoute, getOneRoute, createRoute, updateRoute, deleteRoute } from '@/routes/items.route'

const app = new OpenAPIHono()

app.openapi(getAllRoute, async (c) => {
  const items = await service.getAllItems()
  return c.json(items)
})

app.openapi(getOneRoute, async (c) => {
  const { id } = c.req.valid('param')
  const item = await service.getItem(Number(id))
  return item ? c.json(item) : c.notFound()
})

app.openapi(createRoute, async (c) => {
  const body = c.req.valid('json')
  const newItem = await service.createItem(body)
  return c.json(newItem, 201)
})

app.openapi(updateRoute, async (c) => {
  const { id } = c.req.valid('param')
  const body = c.req.valid('json')
  const numericId = Number(id)

  const existing = await service.getItem(numericId)
  if (existing) {
    const updated = await service.updateItem(numericId, body)
    return c.json(updated)
  }

  const created = await service.createItem(body)
  return c.json(created, 201)
})

app.openapi(deleteRoute, async (c) => {
  const { id } = c.req.valid('param')
  const success = await service.deleteItem(Number(id))
  return success ? c.body(null, 204) : c.notFound()
})

export default app
