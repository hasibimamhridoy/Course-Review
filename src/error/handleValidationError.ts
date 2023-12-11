import mongoose from 'mongoose'
import { IGenericErrorResponse } from '../interfaces/common'

const handleValidationError = (error: mongoose.Error.ValidationError): IGenericErrorResponse => {
  const errorMessages = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message
      }
    }
  )

  return {
    status: 400,
    message: 'Validation Error',
    errorMessages
  }
}

export default handleValidationError
