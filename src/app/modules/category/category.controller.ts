import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { CategoryServices } from './category.services'
import { ICategory } from './category.interface'

const getCategory = catchAsync(async (req: Request, res: Response) => {

  const result = await CategoryServices.getCategory()
  const responseData = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categories retrieved successfully',
    data: result
  }
  sendResponse<ICategory[]>(res, responseData)
})

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const payload: ICategory= req.body
  const result = await CategoryServices.createCategory(payload)

  const responseData = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category created successfully',
    data: result
  }
  sendResponse<ICategory>(res, responseData)
})


export const CategoryController = {
  getCategory,
  createCategory,
}
