import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GOOGLE_FONTS_URL } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "FontFlo - 100+ Premium Fonts Categorized for Designers",
  description: "Explore, preview, and copy over 100 premium fonts in 5 distinct categories. The ultimate SaaS tool for creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
      </head>
      <body className="antialiased bg-white selection:bg-violet-100 selection:text-violet-900">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="ab0cfc21-15e6-4b80-9f68-3881cf3a9c38"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "FontFlo", "version": "1.0.0"}'
        />
        <Navbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
