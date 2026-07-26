import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import {
  CATEGORY_BY_SLUG_QUERY,
  CATEGORY_SLUGS_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from "@/sanity/lib/queries";
import { type SanityDocument, defineQuery } from "next-sanity";
import { SanityImage } from "@/components/SanityImage";
import { PostCard } from "@/components/PostCard";

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
  const [category, catId] = await Promise.all([
    client.fetch<SanityDocument | null>(CATEGORY_WITH_IMAGE, { slug }, options),
    client
      .fetch<{ _id: string } | null>(CATEGORY_BY_SLUG_QUERY, { slug }, options)
      .then((r) => r?._id),
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
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-24 px-16 bg-white dark:bg-black">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-8">
          &larr; Back to home
        </Link>

        <div className="mb-12">
          {category.mainImage && (
            <div className="mb-6 overflow-hidden rounded-lg aspect-video">
              <SanityImage value={category.mainImage} width={800} className="object-cover" />
            </div>
          )}
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            {category.title as string}
          </h1>
          {category.description && (
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {category.description as string}
            </p>
          )}
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
      </main>
    </div>
  );
}
