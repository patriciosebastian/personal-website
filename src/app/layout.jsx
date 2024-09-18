import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Patricio Salazar",
  description: "Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
