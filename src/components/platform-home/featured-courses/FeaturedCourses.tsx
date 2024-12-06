import { StartupCard } from "./StartupCard";
import { COURSES_QUERY } from "@/sanity/lib/queries";
import { CourseType } from "@/types/courses";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";

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
            posts.map((post: CourseType) => (
              <StartupCard key={post._id} post={post} />
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
