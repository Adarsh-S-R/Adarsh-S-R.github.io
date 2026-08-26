import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://adarsh.triada.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adarsh SR | Application Security Consultant & Pentester",
    template: "%s | Adarsh SR",
  },
  description:
    "Adarsh SR: application security consultant, penetration tester, and founder of TRIADA CTF. Web, API, and Android pentesting, authorization and business logic testing.",
  keywords: [
    "Adarsh SR",
    "Adarsh cybersecurity",
    "Adarsh pentest",
    "Adarsh pentester",
    "Adarsh TRIADA",
    "Adarsh SR security researcher",
    "Adarsh SR penetration tester",
    "application security consultant",
    "penetration tester Bangalore",
    "TRIADA CTF",
    "TRIADA CTF founder",
    "BOLA IDOR testing",
    "Android penetration testing",
    "API security testing",
    "VULNCON",
  ],
  authors: [{ name: "Adarsh SR", url: siteUrl }],
  creator: "Adarsh SR",
  publisher: "Adarsh SR",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Adarsh SR",
    title: "Adarsh SR | Application Security Consultant & Pentester",
    description:
      "I find the authorization and business logic flaws that automated scanning cannot reach, then write them up so a developer can actually fix them.",
    images: [{ url: "/photos/og-image.png", width: 1200, height: 630, alt: "Adarsh SR, Application Security Consultant and founder of TRIADA CTF" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@adarsh_sr_",
    creator: "@adarsh_sr_",
    title: "Adarsh SR | Application Security Consultant & Pentester",
    description: "I find the authorization and business logic flaws that automated scanning cannot reach.",
    images: ["/photos/og-image.png"],
  },
  icons: {
    icon: "/photos/favicon.png",
    apple: "/photos/favicon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adarsh SR",
  alternateName: ["Adarsh S R", "Adarsh SR TRIADA"],
  url: siteUrl,
  image: `${siteUrl}/photos/A_sq.png`,
  jobTitle: "Security Consultant",
  description:
    "Security researcher and consultant specialising in web, API, and Android penetration testing and authorization testing. Founder and lead of TRIADA, a top 1% nationally ranked CTF team.",
  worksFor: { "@type": "Organization", name: "Offenlix Labs" },
  founderOf: { "@type": "Organization", name: "TRIADA", url: "https://triada.in" },
  memberOf: { "@type": "Organization", name: "VULNCON", url: "https://vulncon.in" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Yenepoya University" },
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
  sameAs: [
    "https://linkedin.com/in/adarsh-sr",
    "https://github.com/Adarsh-S-R",
    "https://x.com/adarsh_sr_",
    "https://ctftime.org/team/303057",
    "https://triada.in",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* GitHub Pages cannot send HTTP headers, so the CSP ships as a meta tag.
            Meta CSP ignores frame-ancestors, so X-Frame-Options/HSTS still need a
            CDN (e.g. Cloudflare) in front if clickjacking/HSTS hardening is wanted. */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; base-uri 'self'; object-src 'none'; img-src 'self' data:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; form-action 'self'; upgrade-insecure-requests"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <ThemeProvider>
          <a href="#hero" className="skip-link">
            Skip to main content
          </a>
          <BackgroundGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
