import { AnyZodObject, z } from 'zod'

const TagsCourseValidationSchema = z.object({
  name: z.string({
    required_error: 'Tag name is required'
  }),
  isDeleted: z.boolean({
    required_error: 'Tag isDeleted is required'
  })
})

const createCourseZodSchema: AnyZodObject = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    }),
    instructor: z.string({
      required_error: 'Instructor is required'
    }),
    categoryId: z.string({
      required_error: 'Category ID is required'
    }),
    price: z.number({
      required_error: 'Price is required'
    }),
    tags: z.array(TagsCourseValidationSchema),
    startDate: z.string({
      required_error: 'Start Date is required'
    }),
    endDate: z.string({
      required_error: 'End Date is required'
    }),
    language: z.string({
      required_error: 'Language is required'
    }),
    provider: z.string({
      required_error: 'Provider is required'
    }),
    details: z.object({
      level: z.string({
        required_error: 'Details level is required'
      }),
      description: z.string({
        required_error: 'Details description is required'
      })
    })
  })
})

const updateCourseZodSchema: AnyZodObject = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    }),
    instructor: z.string().optional(),
    categoryId: z.string().optional(),
    price: z.number().optional(),
    tags: z.array(TagsCourseValidationSchema).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    language: z.string().optional(),
    provider: z.string().optional(),
    details: z
      .object({
        level: z.string(),
        description: z.string()
      })
      .optional()
  })
})

export const CourseValidation = {
  createCourseZodSchema,
  updateCourseZodSchema
}
