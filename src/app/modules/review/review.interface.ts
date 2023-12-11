import { Model, Types } from "mongoose"

export type IReview =  {
    courseId: Types.ObjectId;
    rating: number,
    review : string

  }
export type ReviewModel = Model<IReview,Record<string,unknown>>