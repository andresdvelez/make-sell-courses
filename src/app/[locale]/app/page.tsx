import { FeaturedCourses } from "@/components/platform-home/featured-courses/FeaturedCourses";
import { Hero } from "@/components/platform-home/hero/Hero";
import React from "react";

type PlatformPageProps = {
  searchParams: Promise<{ query?: string }>;
};

const PlatformPage = (props: PlatformPageProps) => {
  return (
    <>
      <Hero {...props} />
      <FeaturedCourses {...props} />
    </>
  );
};

export default PlatformPage;
