import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface SanityImageValue {
  asset?: { _id?: string; url?: string };
  alt?: string;
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  [key: string]: unknown;
}

interface SanityImageProps {
  value?: SanityImageValue;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

export function SanityImage({
  value,
  src,
  alt,
  width = 800,
  height,
  className,
  style,
  priority,
}: SanityImageProps) {
  if (src) {
    return (
      <Image
        className={className}
        src={src}
        alt={alt || ""}
        width={width}
        height={height || Math.round(width / 1.5)}
        style={style}
        priority={priority}
      />
    );
  }

  if (!value?.asset) return null;

  return (
    <Image
      className={className}
      src={urlFor(value)
        .width(width)
        .height(height || Math.round(width / 1.5))
        .url()}
      alt={value.alt || alt || ""}
      width={width}
      height={height || Math.round(width / 1.5)}
      style={style}
      priority={priority}
    />
  );
}
