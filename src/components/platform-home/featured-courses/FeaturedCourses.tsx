import { CourseCard } from "./CourseCard";
import { COURSES_QUERY } from "@/sanity/lib/queries";
import { CourseType } from "@/types/courses";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { auth } from "@/auth";

export const FeaturedCourses = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: COURSES_QUERY, params });

  return (
    <>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All courses"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <CourseCard key={post._id} post={post as CourseType} />
            ))
          ) : (
            <p className="">No courses found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
};
