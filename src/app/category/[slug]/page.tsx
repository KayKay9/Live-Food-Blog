import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import {
  CATEGORY_BY_SLUG_QUERY,
  CATEGORY_SLUGS_QUERY,
  POSTS_BY_CATEGORY_QUERY,
  CATEGORIES_QUERY,
} from "@/sanity/lib/queries";
import { type SanityDocument, defineQuery } from "next-sanity";
import { PostCard } from "@/components/PostCard";
import { PageBanner } from "@/components/PageBanner";
import { CategoriesBox } from "@/components/CategoriesBox";
import { Newsletter } from "@/components/Newsletter";

const options = { next: { revalidate: 30 } };

const CATEGORY_WITH_IMAGE = defineQuery(`
  *[_type == "category" && slug.current == $slug][0]{
    _id, title, slug, description,
    "mainImage": mainImage{ asset->{ _id, url }, alt }
  }
`);

export async function generateStaticParams() {
  const slugs = await client
    .withConfig({ useCdn: false })
    .fetch<{ slug: string }[]>(CATEGORY_SLUGS_QUERY);
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [category, catId, allCategories] = await Promise.all([
    client.fetch<SanityDocument | null>(CATEGORY_WITH_IMAGE, { slug }, options),
    client
      .fetch<{ _id: string } | null>(CATEGORY_BY_SLUG_QUERY, { slug }, options)
      .then((r) => r?._id),
    client.fetch<SanityDocument[]>(CATEGORIES_QUERY, {}, options),
  ]);

  if (!category) return notFound();

  const posts = catId
    ? await client.fetch<SanityDocument[]>(
        POSTS_BY_CATEGORY_QUERY,
        { categoryId: catId },
        options
      )
    : [];

  return (
    <div className="flex flex-col flex-1 bg-white">
      <PageBanner
        title={category.title as string}
        subtitle={(category.description as string) || ""}
      />

      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-3 shrink-0">
                <span className="w-1 h-6 bg-orange-500 rounded-full" />
                {category.title as string}
              </h2>
              <div className="flex-1 space-y-1">
                <div className="h-px bg-zinc-200" />
                <div className="h-px bg-zinc-200" />
              </div>
            </div>

            {posts.length === 0 ? (
              <p className="text-zinc-500">No posts in this category yet.</p>
            ) : (
              <div className="flex flex-col gap-6">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </div>

          <aside className="w-full lg:w-80 shrink-0">
            <CategoriesBox categories={allCategories} />
            <Newsletter />
          </aside>
        </div>
      </div>
    </div>
  );
}
