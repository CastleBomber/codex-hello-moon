"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", moon: "home" },
  { href: "/lunar-eclipse", label: "Lunar Eclipse", moon: "lunar" },
  { href: "/solar-eclipse", label: "Solar Eclipse", moon: "solar" },
  { href: "/new-moon", label: "New Moon", moon: "new" },
  { href: "/full-moon", label: "Full Moon", moon: "full" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-end p-4 sm:p-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            aria-label="Open menu"
            className="border border-white/15 bg-black/15 shadow-lg backdrop-blur-md"
          >
            <Menu aria-hidden="true" className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="cosmic-sheet">
          <SheetTitle>Navigation</SheetTitle>
          <div className="cosmic-sheet__stars" aria-hidden="true">
            {Array.from({ length: 18 }, (_, index) => (
              <i
                key={index}
                style={
                  {
                    "--star-x": `${(index * 43 + 7) % 100}%`,
                    "--star-y": `${(index * 29 + 11) % 100}%`,
                    "--star-delay": `${-((index * 0.37) % 4)}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
          <div className="cosmic-sheet__orbit" aria-hidden="true">
            <span />
          </div>
          <div className="cosmic-sheet__header" aria-hidden="true">
            <div className="cosmic-sheet__moon" />
            <div className="cosmic-sheet__line" />
          </div>
          <nav
            aria-label="Main navigation"
            className="relative z-10 my-auto"
          >
            <ul className="space-y-2">
              {links.map((link, index) => {
                const active = pathname === link.href;
                return (
                  <li
                    key={link.href}
                    className="menu-link"
                    style={{ "--link-index": index } as React.CSSProperties}
                  >
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "cosmic-nav-link flex items-center justify-between rounded-2xl px-5 py-4 text-base tracking-[0.12em] text-white/55 transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                          active && "cosmic-nav-link--active text-white",
                        )}
                      >
                        <span>{link.label}</span>
                        <span
                          className={cn(
                            "mini-moon",
                            `mini-moon--${link.moon}`,
                          )}
                          aria-hidden="true"
                        >
                          <span className="mini-moon__body" />
                        </span>
                      </Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
