import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/projects" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-8xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link to="/" className="group flex items-center gap-2" aria-label={`${siteConfig.brand} — home`}>
          <span className="flex size-9 items-center justify-center rounded-lg border border-border-strong bg-surface transition-colors group-hover:border-accent/50">
            <img src="/logo-icon.png" alt="" className="size-6 object-contain" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground">ZOBIX SOLUTIONS</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant="accent">
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex size-10 items-center justify-center rounded-full border border-border-strong text-foreground lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </div>

      <Sheet open={open} onClose={() => setOpen(false)} title="MENU">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="accent" className="mt-8 w-full" onClick={() => setOpen(false)}>
          <Link to="/contact">Start a Project</Link>
        </Button>
      </Sheet>
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/#")) {
    return (
      <a
        href={href}
        className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
      >
        {label}
      </a>
    );
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-2 hover:text-foreground",
          isActive ? "text-foreground" : "text-muted-foreground",
        )
      }
    >
      {label}
    </NavLink>
  );
}

export { Navbar };
