import { SortOrder } from 'mongoose'
import calculatePagination from '../../../helper/peginationHelper'
import { ICourse, ICourseFilters, IPaginationOptions } from './course.interface'
import User from './course.model'
import Course from './course.model'
import { courseNestedfilterableFileds } from './course.constant'

const createCourse = async (payload: ICourse): Promise<ICourse> => {
  const result = await User.create(payload)
  return result
}

const getCourses = async (filters: ICourseFilters, paginationOptions: IPaginationOptions, query) => {
  /**
   * Calculatte the pagination with helper functions
   */
  const { page, limit, skip, sortBy, sortOrder } = calculatePagination(paginationOptions)

  /**
   * Sortying the pagination
   */
  const sortConditions: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  /**
   * Searching Implementation
   */
  const { searchTerm, ...filtersData } = filters

  const andConditions = []

  if (query?.minPrice && query?.maxPrice) {
    const min = Number(query?.minPrice)
    const max = Number(query?.maxPrice)
    andConditions.push({
      price: { $gt: min, $lt: max }
    })
  }

  if (query?.startDate && query?.endDate) {
    andConditions.push({
      startDate: { $gte: query?.startDate},
      endDate: { $lte: query?.endDate},
    })
  }

  if (query?.level) {
    andConditions.push({
      'details.level': query.level
    })
  }

  if (query?.tags) {
    andConditions.push({
      tags: {
        $elemMatch: { name: query.tags }
      }
    })
  }

  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value
      }))
    })
  }

  // console.log(query.tags);

  /**
   * Where Conditions
   */
  const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {}

  console.log('And Condition', whereConditions)

  /**
   * Database Operations
   */
  const result = await Course.find(whereConditions).sort(sortConditions).skip(skip).limit(limit)
  const total = await Course.countDocuments(whereConditions)

  return {
    meta: {
      page,
      limit,
      total
    },
    data: result
  }
}

export const CourseServices = {
  createCourse,
  getCourses
}
