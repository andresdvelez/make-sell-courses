import { defineQuery } from "next-sanity";

export const COURSES_QUERY =
  defineQuery(`*[_type == "course" && defined(slug.current)] | order(_createdAt desc) {
        _id,
        title,
        slug, 
        _createdAt,
        author -> {
            _id, name, image, bio
        },
        views, 
        description, 
        category,
        image
    }`);
