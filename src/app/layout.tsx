import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OpenToWorkBanner } from "@/components/OpenToWorkBanner";
import { site, seo } from "@/data/content";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: "https://haseebshoukat.com",
    image: seo.ogImage,
    sameAs: [site.linkedin, site.github],
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: site.location },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Backend Development",
      "LLMs",
      "RAG",
    ],
    alumniOf: { "@type": "College", name: "FAST-NUCES" },
    worksFor: { "@type": "Organization", name: "The Cerebral" },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${font.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <OpenToWorkBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
