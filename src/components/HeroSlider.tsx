"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "/sliders/h4-img-24.jpg",
    title: "The healthiest way to start your day",
    description:
      "Discover wholesome breakfast recipes packed with nutrients to fuel your morning and keep you energized all day long.",
  },
  {
    image: "/sliders/h4-img-24.jpg",
    title: "Quick & easy weeknight dinners",
    description:
      "Delicious meals ready in under 30 minutes — perfect for busy families who refuse to compromise on flavor.",
  },
  {
    image: "/sliders/h4-img-24.jpg",
    title: "Baking made simple",
    description:
      "From crusty sourdough to decadent chocolate cake, master the art of baking with our step-by-step guides.",
  },
];

export function HeroSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, dragFree: false }}
        className="size-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="relative pl-0 basis-full">
              <div
                className="relative w-full overflow-hidden"
                style={{ height: "70vh", minHeight: "500px" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto w-full px-6">
                    <div className="max-w-xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                        {slide.description}
                      </p>
                      <button className="inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-8 py-3 rounded-full hover:bg-zinc-100 transition">
                        Explore More
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 text-white border-white/30 bg-white/20 hover:bg-white/30 hover:text-white" />
        <CarouselNext className="right-4 text-white border-white/30 bg-white/20 hover:bg-white/30 hover:text-white" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-white scale-110"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
