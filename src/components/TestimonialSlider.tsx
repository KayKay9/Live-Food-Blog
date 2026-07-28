"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SanityImage } from "./SanityImage";
import "swiper/css";
import "swiper/css/pagination";

export interface Testimonial {
  _id: string;
  name: string;
  userType?: string;
  text: string;
  image?: {
    asset?: { _id?: string; url?: string };
    alt?: string;
  };
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className="w-full bg-warm-bg dark:bg-zinc-900 py-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mt-2">
            What Our Readers Say
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t._id}>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-orange-100 dark:bg-orange-900 shrink-0 flex items-center justify-center">
                    {t.image?.asset ? (
                      <SanityImage
                        value={t.image}
                        width={56}
                        height={56}
                        className="size-full object-cover"
                      />
                    ) : (
                      <span className="text-orange-600 dark:text-orange-300 font-bold text-lg">
                        {t.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 dark:text-white">
                      {t.name}
                    </p>
                    {t.userType && (
                      <p className="text-sm text-zinc-500">{t.userType}</p>
                    )}
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}