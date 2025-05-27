import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://patriciosalazar.dev'),
  title: {
    default: "Patricio Salazar - Software Developer",
    template: "%s | Patricio Salazar"
  },
  description: "Full Stack Software Developer. Explore my projects, blog posts, and freelance services.",
  keywords: ["Software Developer", "Full Stack", "Web Developer", "Laravel", "Next.js", "React", "JavaScript", "Freelance Developer", "Blog", "Build In Public", "Learn In Public", "Side Project", "Solopreneur"],
  authors: [{ name: "Patricio Salazar" }],
  creator: "Patricio Salazar",
  publisher: "Patricio Salazar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://patriciosalazar.dev",
    siteName: "Patricio Salazar",
    title: "Patricio Salazar - Software Developer",
    description: "Full Stack Software Developer. Explore my projects, blog posts, and freelance services.",
  },
  twitter: {
    card: "summary",
    title: "Patricio Salazar - Software Developer",
    description: "Full Stack Software Developer. Explore my projects, blog posts, and freelance services.",
    creator: "@patricio_slzr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: '8qWCHaJ_iZhbnr5_5zwLBJEAbEwMcqQP671kTxuXQj4',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://patriciosalazar.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f9fafb" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1f2937" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Patricio Salazar",
              "jobTitle": "Software Developer",
              "url": "https://patriciosalazar.dev",
              "sameAs": [
                "https://github.com/patriciosebastian",
                "https://linkedin.com/in/patriciosalazardev",
                "https://twitter.com/patricio_slzr",
              ],
              "knowsAbout": ["Software Development", "Full Stack", "Web Development", "Next.js", "React", "JavaScript", "Laravel", "Side Projects", "Building in Public", "Learning in Public", "Tech"],
              "description": "Full Stack Software Developer sharing my journey in web development, and side projects. Follow along as I learn and build in public.",
            }),
          }}
        />
      </head>
      <body className={inter.className + ` container h-full mx-auto lg:text-lg lg:max-w-3xl`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            {children}
          </main>
        </ThemeProvider>

        {/* Cloudflare Web Analytics */}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "b4ae2d968b044a2cbee0a95e466df1d3"}'></script>
        {/* End Cloudflare Web Analytics */}
      </body>
    </html>
  );
}
