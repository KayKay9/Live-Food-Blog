import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { SanityImage } from "@/components/SanityImage";

interface PostCardProps {
  post: SanityDocument;
}

export function PostCard({ post }: PostCardProps) {
  const slug = (post.slug as { current?: string })?.current;

  return (
    <Link
      href={`/${slug}`}
      className="flex gap-5 group"
    >
      <div className="w-1/2 aspect-[4/3] shrink-0 rounded-lg overflow-hidden bg-zinc-100">
        {post.mainImage ? (
          <SanityImage
            value={post.mainImage}
            width={448}
            height={336}
            className="size-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="size-full flex items-center justify-center text-zinc-300 text-xs">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <h3 className="text-base sm:text-xl font-semibold text-zinc-900 group-hover:text-orange-500 transition-colors line-clamp-2">
          {post.title as string}
        </h3>
        {post.excerpt && (
          <p className="mt-1 text-md text-zinc-500 line-clamp-5">
            {post.excerpt as string}
          </p>
        )}
      </div>
    </Link>
  );
}
