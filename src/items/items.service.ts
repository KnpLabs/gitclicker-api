import { Item, BaseItem } from './item.interface'
import { Items } from './items.interface'

const items: Items = {
  1: {
    id: 1,
    name: 'Bash',
    price: 10,
    multiplier: 0.1
  },
  2: {
    id: 2,
    name: 'Git',
    price: 100,
    multiplier: 1.2
  },
  3: {
    id: 3,
    name: 'Javascript',
    price: 10000,
    multiplier: 14.0
  },
  4: {
    id: 4,
    name: 'React',
    price: 50000,
    multiplier: 75.0
  },
  5: {
    id: 5,
    name: 'Vim',
    price: 1000000,
    multiplier: 10000.0
  }
}

export const findAll = async (): Promise<Item[]> => Object.values(items)

export const find = async (id: number): Promise<Item> => items[id]

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf()

  items[id] = {
    id,
    ...newItem
  }

  return items[id]
}

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id)

  if (!item) {
    return null
  }

  items[id] = { id, ...itemUpdate }

  return items[id]
}

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id)

  if (!item) {
    return null
  }

  delete items[id]
}
