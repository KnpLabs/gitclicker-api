import { z } from '@hono/zod-openapi'

const validateNumber = (val: string | number) => {
  if (typeof val === 'number') return val
  const parsed = Number.parseFloat(val)
  if (Number.isNaN(parsed)) {
    throw new Error('Invalid number format')
  }
  return parsed
}

const ItemSchema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    name: z.string().openapi({ example: 'React' }),
    price: z
      .union([z.number(), z.string().transform(val => validateNumber(val))])
      .openapi({ example: 499.99 }),
    linesPerMillisecond: z
      .union([z.number(), z.string().transform(val => validateNumber(val))])
      .openapi({ example: 0.8 }),
  })
  .openapi('Item')

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
