import express from 'express'
import validateRequestMiddleWare from '../../middleware/validateRequest'
import { CourseValidation, } from './course.validation'
import { CourseController } from './course.controller'
const router = express.Router()

router.post(
  '/',
  validateRequestMiddleWare(CourseValidation.createCourseZodSchema),
  CourseController.createCourse
)

router.get(
  '/',
  CourseController.getCourses
)
router.get(
  '/best',
  CourseController.getBestCourse
)

router.get(
  '/:courseId/reviews',
  CourseController.getCourseWithReviews
)

export const CourseRoutes = {
  router
}
