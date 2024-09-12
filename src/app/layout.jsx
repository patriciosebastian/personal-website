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
      <body className={inter.className + ` container h-full mx-auto lg:text-lg`}>
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
      </body>
    </html>
  );
}
