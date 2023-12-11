import { iIssues } from './error'

export type IZodValidationErrorResponse = {
  success : boolean
  message: string
  errorMessages: string
  errorDetails: {
    issues : iIssues[]
    name : string
  },
}
