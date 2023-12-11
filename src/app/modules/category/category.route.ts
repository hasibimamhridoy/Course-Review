import express from 'express'
import validateRequestMiddleWare from '../../middleware/validateRequest'
import { CategoryValidation } from './category.validation'
import { CategoryController } from './category.controller'
const router = express.Router()


router.get('/', CategoryController.getCategory)

router.post(
  '/',
  validateRequestMiddleWare(CategoryValidation.createCategoryZodSchema),
  CategoryController.createCategory
)

export const CategoryRoutes = {
  router
}
