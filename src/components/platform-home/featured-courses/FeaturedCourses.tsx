import React from "react";
import { StartupCard } from "./StartupCard";

export const FeaturedCourses = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All courses"}
      </p>
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post) => <StartupCard key={post._id} post={post} />)
        ) : (
          <p className="">No courses found</p>
        )}
      </ul>
    </section>
  );
};

const posts = [
  {
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: "Felipe" },
    _id: 1,
    description: "This is a description",
    image: "https://placehold.co/600x400",
    category: "Necklace",
    title: "Necklace",
  },
];
