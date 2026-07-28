import { PortableText, type SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/client";
import { POST_QUERY, SLUGS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { SanityImage } from "@/components/SanityImage";
import { PageBanner } from "@/components/PageBanner";
import { CategoriesBox } from "@/components/CategoriesBox";
import { Newsletter } from "@/components/Newsletter";
import { ViewTracker } from "@/components/ViewTracker";

const options = { next: { revalidate: 30 } };

const portableTextComponents = {
  types: {
    image: ({ value }: { value: unknown }) => (
      <div className="my-8">
        <SanityImage value={value as Parameters<typeof SanityImage>[0]["value"]} className="rounded-lg" />
      </div>
    ),
  },
};

export async function generateStaticParams() {
  const slugs = await client.withConfig({ useCdn: false }).fetch<{ slug: string }[]>(SLUGS_QUERY);
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, categories] = await Promise.all([
    client.fetch<SanityDocument | null>(POST_QUERY, { slug }, options),
    client.fetch<SanityDocument[]>(CATEGORIES_QUERY, {}, options),
  ]);

  if (!post) return notFound();

  return (
    <div className="flex flex-col flex-1 bg-white">
      <ViewTracker postId={post._id} />
      <PageBanner
        title={post.title as string}
        subtitle={(post.excerpt as string) || ""}
      />

      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">
            <Link
              href="/"
              className="inline-flex text-sm text-zinc-500 hover:text-zinc-900 mb-8 transition-colors"
            >
              &larr; Back to all posts
            </Link>

            <article>
              {post.mainImage && (
                <div className="mb-8 overflow-hidden rounded-xl aspect-video">
                  <SanityImage value={post.mainImage} width={800} priority className="object-cover size-full" />
                </div>
              )}
              {Array.isArray(post.body) && (
                <div className="prose dark:prose-invert max-w-none">
                  <PortableText value={post.body} components={portableTextComponents} />
                </div>
              )}
            </article>
          </div>

          <aside className="w-full lg:w-80 shrink-0">
            <CategoriesBox categories={categories} />
            <Newsletter />
          </aside>
        </div>
      </div>
    </div>
  );
}
