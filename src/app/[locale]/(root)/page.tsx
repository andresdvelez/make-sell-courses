import { FeaturedCourses } from "@/components/platform-home/featured-courses/FeaturedCourses";
import { Hero } from "@/components/platform-home/hero/Hero";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomePage(props: any) {
  return (
    <>
      <Hero {...props} />
      <FeaturedCourses {...props} />
    </>
  );
}
