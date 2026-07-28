import { defineQuery } from "next-sanity";

const CATEGORIES = `"categories": categories[]->{ _id, title, slug }`;

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(_createdAt desc){ _id, title, slug, excerpt, publishedAt, ${CATEGORIES}, "mainImage": mainImage{ asset->{ _id, url }, alt } }`
);

export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{ _id, title, slug, body, excerpt, publishedAt, ${CATEGORIES}, "mainImage": mainImage{ asset->{ _id, url }, alt } }`
);

export const SLUGS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
);

export const CATEGORIES_QUERY = defineQuery(
  `*[_type == "category" && defined(slug.current)] | order(title asc){ _id, title, slug, description, "mainImage": mainImage{ asset->{ _id, url }, alt } }`
);

export const CATEGORY_SLUGS_QUERY = defineQuery(
  `*[_type == "category" && defined(slug.current)]{ "slug": slug.current }`
);

export const CATEGORY_BY_SLUG_QUERY = defineQuery(
  `*[_type == "category" && slug.current == $slug][0]{ _id }`
);

export const POSTS_BY_CATEGORY_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current) && $categoryId in categories[]._ref] | order(_createdAt desc){ _id, title, slug, excerpt, publishedAt, ${CATEGORIES}, "mainImage": mainImage{ asset->{ _id, url }, alt } }`
);

export const POPULAR_POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(coalesce(views, 0) desc)[0..3]{ _id, title, slug, excerpt, views, publishedAt, ${CATEGORIES}, "mainImage": mainImage{ asset->{ _id, url }, alt } }`
);

export const TESTIMONIALS_QUERY = defineQuery(
  `*[_type == "testimonial"] | order(displayOrder asc){ _id, name, userType, text, image }`
);
