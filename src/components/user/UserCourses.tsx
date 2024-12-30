import { client } from "@/sanity/lib/client";
import { COURSES_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import { CourseType } from "@/types/courses";
import React from "react";
import { CourseCard } from "../platform-home/featured-courses/CourseCard";

export const UserCourses = async ({ id }: { id: string }) => {
  const courses = await client.fetch(COURSES_BY_AUTHOR_QUERY, { id });

  console.log(courses);

  return (
    <>
      {courses.length > 0 ? (
        courses.map((startup) => (
          <CourseCard key={startup._id} post={startup as CourseType} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
