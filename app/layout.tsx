import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Provider from "@/lib/Provider";
import ProviderTheme from "@/lib/ProviderTheme";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "askRecipes",
  description: "Find your favorite recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en" suppressHydrationWarning={false}>
        <body
          className={`${manrope.className} bg-gray-100 dark:bg-gray-900 text-custom-text`}
        >
          <ProviderTheme>
            <Navbar />
            {children}
          </ProviderTheme>
        </body>
      </html>
    </Provider>
  );
}
