import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/components/Providers";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Adi Darmawan — Portfolio",
  description: "Modern minimal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          <div className="max-w-5xl mx-auto px-7 py-7">
            <div className="sticky top-0 z-10 flex justify-end mb-4">
              <ThemeToggle />
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
