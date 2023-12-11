import { Schema, model } from 'mongoose'
import { ICourse, ICourseDetails, ITag } from './course.interface'

const tagSchema = new Schema<ITag>({
  name: { type: String, required: true },
  isDeleted: { type: Boolean, required: true }
})

const courseDetailsSchema = new Schema<ICourseDetails>({
  level: { type: String, required: true },
  description: { type: String, required: true }
})

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true, unique: true },
  instructor: { type: String, required: true },
  categoryId: { 
    type: Schema.Types.ObjectId, 
    required: true ,
    ref : 'Category'
  },
  price: { type: Number, required: true },
  tags: [tagSchema],
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  durationInWeeks: { type: Number, required: false },
  language: { type: String, required: true },
  provider: { type: String, required: true },
  details: courseDetailsSchema
},{ versionKey: false })


courseSchema.pre('save', async function (next) {
  const start = new Date(this.startDate);
  const end = new Date(this.endDate);
  const timeDifference = end.getTime() - start.getTime();
  const durationInWeeks = Math.ceil(timeDifference / (7 * 24 * 60 * 60 * 1000));
  this.durationInWeeks = durationInWeeks;

  next();
})


const Course = model<ICourse>('Course', courseSchema)

export default Course
