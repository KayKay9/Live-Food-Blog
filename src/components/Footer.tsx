import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = [
  { label: "HOME", href: "/" },
  { label: "RECIPES", href: "/recipes" },
  { label: "FORUM", href: "/forum" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-bold tracking-widest text-white">
              LOGO
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Discover delicious recipes, share your culinary creations, and
              connect with a community of food lovers from around the world.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Newsletter
            </h4>
            <p className="text-sm mb-3">
              Get the latest recipes delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 placeholder:text-zinc-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="shrink-0 px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Live Blog. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
