import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedInIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-8xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg border border-border-strong bg-surface">
              <img src="/logo-icon.png" alt="" className="size-6 object-contain" />
            </span>
            <span className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground">
              {siteConfig.brand.toUpperCase()}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {siteConfig.brandDescription} — software development brand/studio founded by {siteConfig.name}.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-accent" />
            {siteConfig.location}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-accent" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-accent" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.9-4.45 9.9-9.93A9.86 9.86 0 0 0 12.04 2Zm5.8 14.1c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11a11 11 0 0 1-2-.75 9.2 9.2 0 0 1-3.55-3.5c-.35-.5-1.15-1.85-1.15-3.24 0-1.4.72-2.07.98-2.36.26-.28.55-.35.74-.35h.53c.17 0 .4-.06.62.5.24.6.8 2 .87 2.15.07.15.11.31.02.5-.09.18-.14.29-.28.44-.14.16-.29.35-.42.47-.14.13-.28.28-.12.55.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.24 1.4.28.14.44.12.6-.07.17-.2.7-.82.89-1.1.19-.28.37-.23.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.53.33.07.13.07.72-.17 1.4Z" />
                </svg>
                {siteConfig.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex size-9 items-center justify-center rounded-full border border-border-strong text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-8xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.legalNotice}</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
