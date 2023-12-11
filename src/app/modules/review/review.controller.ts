import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { ReviewServices } from './review.services'
import { IReview } from './review.interface'


const createReview = catchAsync(async (req: Request, res: Response) => {
  const payload: IReview= req.body
  const result = await ReviewServices.createReview(payload)

  const responseData = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Review created successfully',
    data: result
  }
  sendResponse<IReview>(res, responseData)
})


export const ReviewController = {
  createReview,
}
