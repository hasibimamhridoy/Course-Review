import { Schema, model } from 'mongoose'
import { ICategory } from './category.interface'

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  { versionKey: false }
)

const User = model<ICategory>('Category', categorySchema)

export default User
