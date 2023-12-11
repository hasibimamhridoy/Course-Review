/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express'
import mongoose from 'mongoose'
import ApiError from '../../error/ApiError'
import handleCastError from '../../error/handleCastError'
import handleValidationError from '../../error/handleValidationError'
import { iErrorDetails } from '../../interfaces/error'
import { ZodError } from 'zod'
import { handleZodError } from '../../error/handleZodError'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {


  let status = 500
  const success = false
  let message = 'Something went wrong.'
  let errorMessages = ''
  let errorDetails: iErrorDetails | null = null;
  const stack = error.stack

  if (error instanceof mongoose.Error.CastError) {
    const simplified = handleCastError(error)
    status = simplified.status
    message = simplified.message
    errorMessages = simplified.errorMessages
  } 
  
  
  else if (error instanceof mongoose.Error.ValidationError) {


    const simplified = handleValidationError(error)

    // console.log("from validation error -------", simplified);

    // status = simplified.status
    // message = simplified.message
    // errorMessages = simplified.errorMessages
  } 

  
  else if (error instanceof ZodError) {
    const simplified = handleZodError(error)

    // console.log("from validation error -------", simplified);
    message = simplified.message,
    errorMessages = simplified.errorMessages,
    errorDetails = simplified.errorDetails

  } 
  
  
  else if (error instanceof ApiError) {

    status = error.status
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message
          }
        ]
      : []
  } 
  
  
  else if (error instanceof Error) {

    message = error.code === 11000 ? "Already Exists" :  error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error.code === 11000 ? "Already Exists" :  error.message
          }
        ]
      : []
  }

  res.status(status).json({
    success,
    message,
    errorMessages,
    errorDetails,
    stack
  })
}

export default errorHandler
