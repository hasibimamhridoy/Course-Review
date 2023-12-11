
import {IReview } from './review.interface'
import User from './review.model'


const createReview = async (payload: IReview): Promise<IReview> => {
  const result = await User.create(payload)
  return result
}


export const ReviewServices = {
  createReview
}
