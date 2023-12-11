import { Model } from "mongoose"

export type ICategory = {
    name: string
}
export type AcademicDepartmentModel = Model<ICategory,Record<string,unknown>>