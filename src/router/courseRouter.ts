import express from "express"
import { CourseController } from "../controller/CourseController"
import { CourseBusiness } from "../business/CourseBusiness"
import { CourseDatabase } from "../database/CourseDatabase"

export const courseRouter = express.Router()

const courseDatabase = new CourseDatabase()
const courseBusiness = new CourseBusiness(courseDatabase)
const courseController = new CourseController(courseBusiness)

courseRouter.get("/", courseController.getCourses)
courseRouter.post("/", courseController.createCourse)
courseRouter.put("/:id", courseController.editCourse)
courseRouter.delete("/:id", courseController.deleteCourse)
