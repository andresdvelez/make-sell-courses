"use client";

import { Link } from "@/i18n/routing";
import { CourseType } from "@/types/courses";
import { formatDate } from "@/utils/formatDate";
import { Avatar, Button, Chip, Image } from "@nextui-org/react";

export const CourseCard = ({ post }: { post: CourseType }) => {
  return (
    <li className="course-card group">
      <div className="flex-between">
        <p className="course-card_date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5 items-center">
          <i
            className="icon-[akar-icons--eye] size-5 text-primary"
            role="img"
            aria-hidden="true"
          ></i>
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
          </Link>
          <Link href={`/course/${post._id}`}>
            <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
          </Link>
        </div>
        <Link href={`/user/${post.author?._id}`}>
          <Avatar src={post.author?.image} size="lg" alt="Placeholder" />
        </Link>
      </div>
      <Link
        href={`/course/${post._id}`}
        className="flex items-center justify-center flex-col"
      >
        <p className="course-card_desc">{post.description}</p>
        <Image
          isZoomed
          src={post.image}
          alt="Placeholder"
          className="course-card_img"
        />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${post.category?.toLowerCase()}`}>
          <Chip className="text-16-medium !h-10" color="secondary">
            {post.category}
          </Chip>
        </Link>
        <Button className="course-card_btn">
          <Link href={`/course/${post._id}`}>Start course</Link>
        </Button>
      </div>
    </li>
  );
};
