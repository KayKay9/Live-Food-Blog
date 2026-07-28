import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import { POSTS_QUERY, CATEGORIES_QUERY, POPULAR_POSTS_QUERY, TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import { type SanityDocument } from "next-sanity";
import { SanityImage } from "@/components/SanityImage";
import { HeroSlider } from "@/components/HeroSlider";
import { PostCard } from "@/components/PostCard";
import { Newsletter } from "@/components/Newsletter";
import { CategoriesBox } from "@/components/CategoriesBox";
import { TestimonialSlider, type Testimonial } from "@/components/TestimonialSlider";

const options = { next: { revalidate: 30 } };
const popularOptions = { next: { revalidate: 30, tags: ["popular-posts"] } };

export default async function HomePage() {
  const [categories, posts, popularPosts, testimonials] = await Promise.all([
    client.fetch<SanityDocument[]>(CATEGORIES_QUERY, {}, options),
    client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options),
    client.fetch<SanityDocument[]>(POPULAR_POSTS_QUERY, {}, popularOptions),
    client.fetch<Testimonial[]>(TESTIMONIALS_QUERY, {}, options),
  ]);

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-black">
      <HeroSlider />

      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/home-cooked-happiness-1536x1024.jpg"
                alt="Home cooked happiness"
                width={768}
                height={512}
                className="object-cover size-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Who we are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-2 mb-4">
              One thousand flavors in one place.
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Welcome to our cozy corner of the internet, where every recipe tells a story and every meal is an invitation to create something beautiful. From comforting classics to bold new flavors, we believe cooking should be joyful, accessible, and shared. Whether you are a seasoned chef or just starting out, our collection of handcrafted recipes is here to inspire your next kitchen adventure. Pull up a chair, explore, and let us cook together.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-3 shrink-0">
            <span className="w-1 h-6 bg-orange-500 rounded-full" />
            Popular Recipes
          </h2>
          <div className="flex-1 space-y-1">
            <div className="h-px bg-zinc-200" />
            <div className="h-px bg-zinc-200" />
          </div>
        </div>
        {popularPosts.length === 0 ? (
          <p className="text-zinc-500">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPosts.map((post) => (
              <PostCard key={post._id} post={post} variant="vertical" />
            ))}
          </div>
        )}
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-16">

            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-3 shrink-0">
                <span className="w-1 h-6 bg-orange-500 rounded-full" />
                Recent Recipes
              </h2>
              <div className="flex-1 space-y-1">
                <div className="h-px bg-zinc-200" />
                <div className="h-px bg-zinc-200" />
              </div>
              <Link
                href="/recipes"
                className="text-sm font-medium text-orange-600 hover:text-orange-700 shrink-0"
              >
                View All →
              </Link>
            </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">

            {posts.length === 0 ? (
              <p className="text-zinc-500">No posts yet.</p>
            ) : (
              <div className="flex flex-col gap-6">
                {posts.slice(0, 3).map((post) => (
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

      <section className="w-full bg-warm-bg py-20">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/happy-young-couple-cooking-together-in-the-kitchen-at-home-1536x1024.jpg"
                alt="Home cooked happiness"
                width={768}
                height={512}
                className="object-cover size-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Why choose us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mt-2 mb-6">
              A Better Way to Cook & Connect
            </h2>
            <ul className="space-y-4">
              {[
                "Fresh, locally sourced ingredients for every recipe",
                "Easy-to-follow instructions for cooks of all skill levels",
                "Step-by-step photos and tips for guaranteed success",
                "Family-tested flavors that bring everyone to the table",
                "Quick meal prep ideas for busy weeknights",
                "Healthy options that never sacrifice taste",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

<section className="w-full bg-warm-bg">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="relative z-10">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl mt-5">
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="w-full md:w-1/2 h-80 md:h-[400px] relative md:-mt-16 md:-mb-0 z-20 md:rounded-l-2xl overflow-hidden">
                <Image
                  src="/joinus.png"
                  alt="Join us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-center md:items-start">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
                  Join us
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                  Let&apos;s start sharing your awesome recipes
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
}
