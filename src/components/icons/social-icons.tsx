import type { SVGProps } from "react";

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A20.8 20.8 0 0 0 14.3 4.3c-2.24 0-3.78 1.37-3.78 3.87v2.16H7.96v2.96h2.56V21h2.98Z" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82c-.9-.9-1.4-2.1-1.4-3.32h-3.28v13.36c0 1.5-1.22 2.7-2.72 2.7a2.72 2.72 0 0 1-2.72-2.72c0-1.5 1.22-2.72 2.72-2.72.27 0 .53.04.78.11v-3.34a6.05 6.05 0 0 0-.78-.05A6.02 6.02 0 0 0 3.14 15.84 6.02 6.02 0 0 0 9.16 21.86a6.02 6.02 0 0 0 6.02-6.02V9.26a8.8 8.8 0 0 0 5.16 1.66V7.65a5.36 5.36 0 0 1-3.74-1.83Z" />
    </svg>
  );
}

export { LinkedInIcon, InstagramIcon, FacebookIcon, TikTokIcon };
