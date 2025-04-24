import * as repo from '@/repositories/items.repository'
import type { BaseItem } from '@/models/item.model'

const getAllItems = () => repo.findAll()
const getItem = (id: number) => repo.find(id)
const createItem = (data: BaseItem) => repo.create(data)
const updateItem = (id: number, data: BaseItem) => repo.update(id, data)
const deleteItem = (id: number) => repo.remove(id)

export { getAllItems, getItem, createItem, updateItem, deleteItem }
