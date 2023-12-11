/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodError } from 'zod'
import {IZodValidationErrorResponse } from '../interfaces/common'

export const handleZodError = (error: ZodError): IZodValidationErrorResponse => {

  const errorMessages = error?.issues?.map((issue : any) => {
    return {
      expected : issue?.expected,
      received : issue?.received,
      code : issue?.code,
      path: issue?.path[issue.path.length - 1],
      message: issue?.message
    }

  })
  return {
    success: false,
    message: 'Validation Error',
    errorMessages : errorMessages.map(issue => issue.path + " is required.").join(" "),
    errorDetails : {
      issues : errorMessages,
      name : "ZodError"
    }
  }
}
