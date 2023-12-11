import express, { Application } from 'express'
import cors from 'cors'
import errorHandler from './app/middleware/errorHandler'
import { routeErrorHandle } from './app/middleware/404RouteErrorHandle'
import cookieParser from 'cookie-parser'
import { CategoryRoutes } from './app/modules/category/category.route'
import { CourseRoutes } from './app/modules/course/course.route'
import { ReviewRoutes } from './app/modules/review/review.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use('/api/categories', CategoryRoutes.router)
app.use('/api/course', CourseRoutes.router)
app.use('/api/reviews', ReviewRoutes.router)


//global
app.use(errorHandler)

// 404 Route Handler
app.use(routeErrorHandle)

export default app
