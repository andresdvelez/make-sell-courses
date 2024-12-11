import { Link } from "@/i18n/routing";
import { client } from "@/sanity/lib/client";
import {
  COURSES_BY_ID_QUERY,
  PLAYLIST_BY_SLUG_QUERY,
} from "@/sanity/lib/queries";
import { formatDate } from "@/utils/formatDate";
import { Image, Skeleton, User } from "@nextui-org/react";
import { notFound } from "next/navigation";

import markdownit from "markdown-it";
import { Suspense } from "react";
import { View } from "@/components/course-details/View";
import { RecommendedCourses } from "@/components/course-details/RecommendedCourses";
import {
  COURSES_BY_ID_QUERYResult,
  PLAYLIST_BY_SLUG_QUERYResult,
} from "@/types/sanity";

const md = markdownit();

export const experimental_ppr = true;

const CoursePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [post, playlist]: [
    COURSES_BY_ID_QUERYResult,
    PLAYLIST_BY_SLUG_QUERYResult,
  ] = await Promise.all([
    client.fetch(COURSES_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "accesorios",
    }),
  ]);

  const editorPosts = playlist?.select ?? [];

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h2 className="heading">{post.title}</h2>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>
      <section className="section_container">
        <Image isZoomed src={post.image!} alt="Thumbail" />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/app/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <User
                avatarProps={{
                  src: post.author?.image as string,
                }}
                description={`@${post.author?.username}`}
                name={post.author?.name}
              />
            </Link>
            <p className="category-tag">{post.category}</p>
          </div>
          <h3 className="text-30-bold">How to make it? </h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>
        <hr className="divider" />
        {editorPosts?.length > 0 && (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <RecommendedCourses courses={editorPosts as any} />
        )}
        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default CoursePage;
