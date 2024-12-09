import { CourseCard } from "./CourseCard";
import { COURSES_QUERY } from "@/sanity/lib/queries";
import { CourseType } from "@/types/courses";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";
import { CourseCardSkeleton } from "@/components/skeletons/CourseCardSkeleton";

export const FeaturedCourses = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: COURSES_QUERY, params });

  return (
    <>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All courses"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            <Suspense fallback={<CourseCardSkeleton />}>
              {posts.map((post) => (
                <CourseCard key={post._id} post={post as CourseType} />
              ))}
            </Suspense>
          ) : (
            <p className="">No courses found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
};
