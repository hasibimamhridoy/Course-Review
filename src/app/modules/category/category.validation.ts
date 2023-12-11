import { AnyZodObject, z } from 'zod'

const createCategoryZodSchema : AnyZodObject = z.object({
  body: z.object({
    name: z.string({
      required_error : "Name is required"
    })
  })
})


export const CategoryValidation = {
  createCategoryZodSchema,
}
