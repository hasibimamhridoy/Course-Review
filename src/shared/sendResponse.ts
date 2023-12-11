/* eslint-disable no-undefined */
import { Response } from 'express'

type IResponse<T> = {
  success: boolean
  statusCode: number
  message?: string | null
  meta? : {
    page: number,
    limit: number,
    total: number,

  }
  data: T | null
}

const sendResponse = <T>(res: Response, data: IResponse<T>): void => {
  const resData: IResponse<T> = {
    success: data?.success,
    statusCode: data?.statusCode,
    message: data?.message || null,
    data: data?.data || null
  }

  res.status(data.statusCode).json(resData)
}

export default sendResponse
