import { client } from "@/sanity/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { type SanityDocument } from "next-sanity";
import { PageBanner } from "@/components/PageBanner";
import { PostCard } from "@/components/PostCard";
import { CategoriesBox } from "@/components/CategoriesBox";
import { Newsletter } from "@/components/Newsletter";

const options = { next: { revalidate: 30 } };

export default async function RecipesPage() {
  const [categories, posts] = await Promise.all([
    client.fetch<SanityDocument[]>(CATEGORIES_QUERY, {}, options),
    client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options),
  ]);

  return (
    <div className="flex flex-col flex-1 bg-white">
      <PageBanner
        title="Recipes"
        subtitle="Explore our collection of delicious recipes for every occasion."
      />

      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-3 shrink-0">
                <span className="w-1 h-6 bg-orange-500 rounded-full" />
                All Recipes
              </h2>
              <div className="flex-1 space-y-1">
                <div className="h-px bg-zinc-200" />
                <div className="h-px bg-zinc-200" />
              </div>
            </div>

            {posts.length === 0 ? (
              <p className="text-zinc-500">No recipes yet.</p>
            ) : (
              <div className="flex flex-col gap-6">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            )}
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
