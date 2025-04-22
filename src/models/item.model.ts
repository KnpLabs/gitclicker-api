import { z } from '@hono/zod-openapi'

const ItemSchema = z.object({
  id: z.number().openapi({ example: 1 }),
  name: z.string().openapi({ example: 'React' }),
  price: z.number().openapi({ example: 499 }),
  linesPerMillisecond: z.number().openapi({ example: 10 }),
}).openapi('Item')

const BaseItemSchema = ItemSchema.omit({ id: true }).openapi('BaseItem')

const ItemParams = z.object({
  id: z.string().openapi({
    param: { name: 'id', in: 'path' },
    example: '1',
  }),
})

type Item = z.infer<typeof ItemSchema>
type BaseItem = z.infer<typeof BaseItemSchema>
type Items = Record<number, Item>

export { ItemSchema, BaseItemSchema, ItemParams }
export type { Item, BaseItem, Items }
