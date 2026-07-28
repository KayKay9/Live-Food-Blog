import { PageBanner } from "@/components/PageBanner";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "123 Recipe Lane, Foodville, FC 10001",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "hello@liveblog.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <PageBanner
        title="Get In Touch"
        subtitle="We would love to hear from you. Drop us a message anytime."
      />

      <section className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">
              Send Us A Message
            </h2>
            <div className="w-12 h-1 bg-orange-500 rounded-full mb-8" />
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 text-sm rounded-lg border border-zinc-300 bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 text-sm rounded-lg border border-zinc-300 bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 text-sm rounded-lg border border-zinc-300 bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-4 py-3 text-sm rounded-lg border border-zinc-300 bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition resize-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-white bg-zinc-800 rounded-lg hover:bg-zinc-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">
              Contact Information
            </h2>
            <div className="w-12 h-1 bg-orange-500 rounded-full mb-8" />
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-11 h-11 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {info.label}
                    </p>
                    <p className="text-sm text-zinc-500">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold text-zinc-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-warm-bg rounded-full flex items-center justify-center text-zinc-500 hover:bg-orange-100 hover:text-orange-600 transition-all" aria-label="Facebook">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-warm-bg rounded-full flex items-center justify-center text-zinc-500 hover:bg-orange-100 hover:text-orange-600 transition-all" aria-label="Twitter">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-warm-bg rounded-full flex items-center justify-center text-zinc-500 hover:bg-orange-100 hover:text-orange-600 transition-all" aria-label="Instagram">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-warm-bg rounded-full flex items-center justify-center text-zinc-500 hover:bg-orange-100 hover:text-orange-600 transition-all" aria-label="YouTube">
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
