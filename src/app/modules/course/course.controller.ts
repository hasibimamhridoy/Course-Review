import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'

import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { CourseServices } from './course.services'
import { ICourse } from './course.interface'
import pick from '../../../shared/pick'
import { coursefilterableFileds, paginationFields } from './course.constant'


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


   /**
   *Useing pik por Get paginations options
   */
   const paginationOptions = pick(req.query, paginationFields)

   /**
   * Useing pik por get the filterFields in an object .
   */

  //  console.log(coursefilterableFileds);
   const filters = pick(req.query, coursefilterableFileds)


  const result = await CourseServices.getCourses(filters,paginationOptions,req?.query)
  const responseData = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Courses retrieved successfully',
    meta: result.meta,
    data: result
  }
  sendResponse(res, responseData)
})

export const CourseController = {
  createCourse,
  getCourses
}
