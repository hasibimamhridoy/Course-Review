import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'

import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { CourseServices } from './course.services'
import { ICourse } from './course.interface'


const createCourse= catchAsync(async (req: Request, res: Response) => {
  const payload: ICourse= req.body
  const result = await CourseServices.createCourse(payload)

  const responseData = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course created successfully',
    data: result
  }
  sendResponse(res, responseData)
})

const getCourses = catchAsync(async (req: Request, res: Response) => {

  const result = await CourseServices.getCourses()
  const responseData = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Courses retrieved successfully',
    data: result
  }
  sendResponse<ICourse[]>(res, responseData)
})

export const CourseController = {
  createCourse,
  getCourses
}
