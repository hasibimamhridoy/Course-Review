
import { ICategory } from './category.interface'
import User from './category.model'

const getCategory = async () => {
  const result = await User.find()
  return result
}

const createCategory = async (payload: ICategory): Promise<ICategory> => {
  const result = await User.create(payload)
  return result
}


export const CategoryServices = {
  createCategory,
  getCategory
}
