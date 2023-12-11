import { AnyZodObject, z } from 'zod'

const createReviewZodSchema : AnyZodObject = z.object({
  body: z.object({
    courseId: z.string({
      required_error: 'CourseId ID is required'
    }),
    rating: z.number({
      required_error: 'Rating is required'
    }),
    review: z.string({
      required_error: 'Review is required'
    }),
  })
})


export const ReviewValidation = {
  createReviewZodSchema,
}
