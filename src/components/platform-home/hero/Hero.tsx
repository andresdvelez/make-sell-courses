import React from "react";
import { SearchForm } from "./SearchForm";

export const Hero = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <section className="pink_container">
      <p className="tag">¿Life issues?</p>
      <h2 className="heading">Make & Sell</h2>
      <p className="sub-heading !max-w-3xl">Fashion jewelry</p>
      <SearchForm query={query} />
    </section>
  );
};
