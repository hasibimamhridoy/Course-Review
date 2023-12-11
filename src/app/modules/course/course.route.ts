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

export const CourseRoutes = {
  router
}
