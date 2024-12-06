import { Author, Course } from "./sanity";

export type CourseType = Omit<Course, "author"> & { author?: Author };
