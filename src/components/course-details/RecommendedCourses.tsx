import React, { Suspense } from "react";
import { CourseCardSkeleton } from "../skeletons/CourseCardSkeleton";
import { CourseType } from "@/types/courses";
import { CourseCard } from "../platform-home/featured-courses/CourseCard";

export const RecommendedCourses = async ({
  courses,
}: {
  courses: CourseType[];
}) => {
  return (
    <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
      <p className="text-30-bold">Recommended courses</p>
      <ul className="card_grid-sm">
        <Suspense fallback={<CourseCardSkeleton />}>
          {courses.map((course, index) => (
            <CourseCard key={`${course.title}-${index}`} post={course} />
          ))}
        </Suspense>
      </ul>
    </div>
  );
};
