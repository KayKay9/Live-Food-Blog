import type { SanityDocument } from "next-sanity";
import Link from "next/link";
import { SanityImage } from "@/components/SanityImage";

interface CategoriesBoxProps {
  categories: SanityDocument[];
}

export function CategoriesBox({ categories }: CategoriesBoxProps) {
  return (
    <div className="relative border border-zinc-200 rounded-xl p-6 text-center">
              <span className="text-xl absolute -top-3 left-1/2 -translate-x-1/2 uppercase bg-white px-2 text-sm font-semibold text-zinc-500">
                Categories
              </span>

              {categories.length === 0 ? (
                <p className="text-zinc-500 text-sm mt-2">No categories yet.</p>
              ) : (
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat._id}
                      href={`/category/${(cat.slug as { current?: string })?.current}`}
                      className="flex-col items-center justify-center text-center gap-3 p-2 rounded-lg hover:bg-zinc-50 transition-colors group"
                    >
                      <div className="shrink-0 rounded-md overflow-hidden">
                        {cat.mainImage ? (
                          <SanityImage
                            value={cat.mainImage}
                            width={65}
                            height={67}
                            className="size-full object-contain"
                          />
                        ) : (
                          <div className="flex items-center justify-center text-zinc-400 text-xs">
                            No img
                          </div>
                        )}
                      </div>
                      <span className="text-lg font-medium text-zinc-700 group-hover:text-orange-600 transition-colors">
                        {cat.title as string}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
  );
}
