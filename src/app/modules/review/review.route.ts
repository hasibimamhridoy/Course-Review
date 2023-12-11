import express from 'express'
import { ReviewController } from './review.controller'
import validateRequestMiddleWare from '../../middleware/validateRequest'
import { ReviewValidation } from './review.validation'
const router = express.Router()



router.post(
  '/',
  validateRequestMiddleWare(ReviewValidation.createReviewZodSchema),
  ReviewController.createReview
)

export const ReviewRoutes = {
  router
}
