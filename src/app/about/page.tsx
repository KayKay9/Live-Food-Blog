import { PageBanner } from "@/components/PageBanner";

const values = [
  {
    title: "Quality Ingredients",
    description:
      "We source the finest, freshest ingredients to ensure every recipe delivers exceptional flavor and nutrition.",
  },
  {
    title: "Expert Guidance",
    description:
      "Our team of professional chefs and food scientists develop and test every recipe so you can cook with confidence.",
  },
  {
    title: "Community Driven",
    description:
      "We believe food brings people together. Our platform is built by and for a community of passionate home cooks.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <PageBanner
        title="About Us"
        subtitle="We are a community of food lovers on a mission to share the joy of cooking with everyone."
      />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
            Our Story
          </h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto mb-6 rounded-full" />
          <p className="text-zinc-600 leading-relaxed">
            What started as a simple blog sharing family recipes has grown into
            a vibrant community of home cooks, professional chefs, and food
            enthusiasts. We believe that cooking should be accessible,
            enjoyable, and inspiring for everyone.
          </p>
          <p className="text-zinc-600 leading-relaxed mt-4">
            Every recipe on our platform is tested multiple times, photographed
            with care, and written with clear instructions to help you create
            memorable meals. Whether you are a beginner or an experienced cook,
            you will find something to love here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-xl border border-zinc-200 hover:border-orange-200 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
