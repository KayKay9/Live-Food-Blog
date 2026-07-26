import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle: string;
  image?: string;
}

export function PageBanner({ title, subtitle, image = "/sliders/h4-img-24.jpg" }: PageBannerProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/80">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
