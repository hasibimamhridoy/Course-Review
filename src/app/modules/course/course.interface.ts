import { Model, Types } from "mongoose"


export type ITag =  {
    name: string;
    isDeleted: boolean;
  }
  
 export type ICourseDetails = {
    level: string;
    description: string;
  }
  
 export type ICourse =  {
    title: string;
    instructor: string;
    categoryId: Types.ObjectId;
    price: number;
    tags: ITag[];
    startDate: string;
    endDate: string;
    durationInWeeks :number
    language: string;
    provider: string;
    details: ICourseDetails;
  }
  

export type AcademicDepartmentModel = Model<ICourse,Record<string,unknown>>