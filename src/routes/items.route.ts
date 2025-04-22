import {
  ItemSchema,
  BaseItemSchema,
  ItemParams,
} from '@/models/item.model'
import { createRoute, z } from '@hono/zod-openapi'

const getAllRoute = createRoute({
  method: 'get',
  path: '/items',
  responses: {
    200: {
      description: 'Get all items',
      content: { 'application/json': { schema: z.array(ItemSchema) } },
    },
  },
})

const getOneRoute = createRoute({
  method: 'get',
  path: '/items/{id}',
  request: { params: ItemParams },
  responses: {
    200: { description: 'Found', content: { 'application/json': { schema: ItemSchema } } },
    404: { description: 'Not found' },
  },
})

const createRouteDef = createRoute({
  method: 'post',
  path: '/items',
  request: {
    body: {
      content: {
        'application/json': { schema: BaseItemSchema },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ItemSchema } },
    },
  },
})

const updateRoute = createRoute({
  method: 'put',
  path: '/items/{id}',
  request: {
    params: ItemParams,
    body: {
      content: {
        'application/json': { schema: BaseItemSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Updated',
      content: { 'application/json': { schema: ItemSchema } },
    },
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ItemSchema } },
    },
    404: { description: 'Not found' },
  },
})

const deleteRoute = createRoute({
  method: 'delete',
  path: '/items/{id}',
  request: { params: ItemParams },
  responses: {
    204: { description: 'Deleted' },
    404: { description: 'Not found' },
  },
})

export {
  getAllRoute,
  getOneRoute,
  createRouteDef as createRoute,
  updateRoute,
  deleteRoute,
}
