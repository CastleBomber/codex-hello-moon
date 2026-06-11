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
  { href: "/", label: "Home" },
  { href: "/lunar-eclipse", label: "Lunar Eclipse" },
  { href: "/solar-eclipse", label: "Solar Eclipse" },
  { href: "/new-moon", label: "New Moon" },
  { href: "/full-moon", label: "Full Moon" },
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
        <SheetContent>
          <SheetTitle>Navigation</SheetTitle>
          <nav aria-label="Main navigation" className="my-auto">
            <ul className="space-y-1">
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
                          "flex items-center rounded-xl px-4 py-3 text-lg tracking-[0.08em] text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                          active && "bg-white/[0.08] text-white",
                        )}
                      >
                        {link.label}
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
