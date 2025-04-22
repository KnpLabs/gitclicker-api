import { OpenAPIHono } from '@hono/zod-openapi'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'
import { swaggerUI } from '@hono/swagger-ui'
import itemsController from '@/controllers/items.controller'

const app = new OpenAPIHono()

app.use('/api/*', cors({ origin: '*' }))
app.use(secureHeaders())

app.route('/api/shop', itemsController)

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    title: 'Gitclicker Shop API',
    version: '1.0.0',
  },
})

app.get('/swagger', swaggerUI({ url: '/doc' }))

app.notFound(c => c.text('Resources not found', 404))
app.onError((err, c) => {
  console.error(err)
  return c.text('Internal server error', 500)
})

export default app
