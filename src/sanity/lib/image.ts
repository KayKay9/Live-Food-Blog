import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity/client";

interface SanityImageSource {
  asset?: { _ref?: string; _id?: string; url?: string };
  alt?: string;
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  [key: string]: unknown;
}

const builder = createImageUrlBuilder({
  projectId: client.config().projectId ?? "",
  dataset: client.config().dataset ?? "",
});

export const urlFor = (source: SanityImageSource) => builder.image(source);
