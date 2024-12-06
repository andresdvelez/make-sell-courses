import React from "react";
import { StartupCard } from "./StartupCard";
import { client } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";
import { CourseType } from "@/types/courses";

export const FeaturedCourses = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = await client.fetch(COURSES_QUERY);

  return (
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All courses"}
      </p>
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <StartupCard key={post._id} post={post as CourseType} />
          ))
        ) : (
          <p className="">No courses found</p>
        )}
      </ul>
    </section>
  );
};
