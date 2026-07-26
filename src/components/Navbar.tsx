"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "RECIPES", href: "/recipes" },
  // { label: "FORUM", href: "/forum" },
  // { label: "SHOP", href: "/shop" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Sheet>
            <SheetTrigger className="sm:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="px-4 py-6 border-b border-zinc-200">
                <Link href="/" className="text-lg font-bold tracking-widest text-zinc-900">
                  LOGO
                </Link>
              </div>
              <div className="flex flex-col gap-1 p-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden sm:flex items-center justify-center flex-1 gap-6">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              className="text-lg font-bold tracking-widest text-zinc-900 mx-4"
            >
              LOGO
            </Link>
            {navItems.slice(2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="sm:hidden text-lg font-bold tracking-widest text-zinc-900"
          >
            LOGO
          </Link>

          <div className="sm:hidden w-10" />
        </div>
      </div>
    </nav>
  );
}
