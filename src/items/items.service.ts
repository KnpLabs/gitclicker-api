import { Item } from './item.interface'
import { Items } from './items.interface'

const items: Items = {
  1: {
    name: 'Bash',
    price: 10,
    multiplier: 0.1
  },
  2: {
    name: 'Git',
    price: 100,
    multiplier: 1.2
  },
  3: {
    name: 'Javascript',
    price: 10000,
    multiplier: 14.0
  },
  4: {
    name: 'React',
    price: 50000,
    multiplier: 75.0
  },
  5: {
    name: 'Vim',
    price: 1000000,
    multiplier: 10000.0
  }
}

export const findAll = async (): Promise<Item[]> => Object.values(items)
