"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/docs" },
  { label: "Mission & Vision", href: "/docs/mission-vision" },
  { label: "Open-Source Ethos", href: "/docs/ethos" },
  { label: "Tokenomics", href: "/docs/tokenomics" },
  { label: "Beta Program", href: "/docs/eap" },
  { label: "Links", href: "/docs/links" },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-muted bg-muted/30 dark:bg-muted/10 px-4 py-6 md:py-10 md:sticky md:top-0 md:h-screen">
        <nav className="space-y-2">
          <div className="mb-4 pl-1 flex items-center">
            <Link href="/docs" prefetch={false} className="focus:outline-none">
              <img
                src="/letter.svg"
                alt="Neur Letter Logo"
                className="h-10 w-auto mb-2 drop-shadow-sm"
                style={{ maxWidth: 60 }}
              />
            </Link>
          </div>
          <hr className="border-muted mb-4" />
          <h2 className="text-lg font-semibold mb-4 tracking-tight">Documentation</h2>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/docs" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      "block rounded px-3 py-2 text-base font-medium transition-colors " +
                      (isActive
                        ? "bg-accent text-accent-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground/90")
                    }
                    prefetch={false}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 px-4 py-8 md:px-12 md:py-12 overflow-x-auto">
        {children}
      </main>
    </div>
  );
} 