import { FeaturedCourses } from "@/components/platform-home/featured-courses/FeaturedCourses";
import { Hero } from "@/components/platform-home/hero/Hero";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlatformPage = (props: any) => {
  return (
    <>
      <Hero {...props} />
      <FeaturedCourses {...props} />
    </>
  );
};

export default PlatformPage;
