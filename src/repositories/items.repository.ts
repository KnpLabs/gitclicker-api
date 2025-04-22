import type { Item, BaseItem, Items } from '@/models/item.model'

const items: Items = {
  1: { id: 1, name: 'Bash', price: 10, linesPerMillisecond: 0.1 },
  2: { id: 2, name: 'Git', price: 100, linesPerMillisecond: 1.2 },
  3: { id: 3, name: 'Javascript', price: 10000, linesPerMillisecond: 14.0 },
  4: { id: 4, name: 'React', price: 50000, linesPerMillisecond: 75.0 },
  5: { id: 5, name: 'Vim', price: 1000000, linesPerMillisecond: 10000.0 },
}

const findAll = async (): Promise<Item[]> => Object.values(items)

const find = async (id: number): Promise<Item | null> => items[id] ?? null

const create = async (newItem: BaseItem): Promise<Item> => {
  const id = Date.now()
  items[id] = { id, ...newItem }
  return items[id]
}

const update = async (id: number, data: BaseItem): Promise<Item | null> => {
  if (!items[id]) return null
  items[id] = { id, ...data }
  return items[id]
}

const remove = async (id: number): Promise<boolean> => {
  if (!items[id]) return false
  delete items[id]
  return true
}

export { findAll, find, create, update, remove }
