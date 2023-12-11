
import { ICourse } from './course.interface'
import User from './course.model'


const createCourse = async (payload: ICourse): Promise<ICourse> => {
  const result = await User.create(payload)
  return result
}

const getCourses = async () : Promise<ICourse[]> => {
  const result = await User.find()
  return result
}


export const CourseServices = {
  createCourse,
  getCourses
}
