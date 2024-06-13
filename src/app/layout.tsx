import type { Metadata, Viewport } from "next";

import Layout from "@/lib/layout";
import { fontAvenir } from "@/lib/styles/fonts";
import { cn } from "@/lib/styles/utils";

import "@/lib/styles/globals.css";
import { APP_NAME, DESC } from "./config";
import TanstackProvider from "@/lib/providers/TanstackProvider";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESC,
  robots: { index: true, follow: true },
  icons: {
    icon: "/seo/favicon-32x32.png",
    shortcut: "/seo/favicon-16x16.png",
    apple: "/seo/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/seo/maskable-icon.png",
    },
  },
  keywords: [
    "Charity",
    "Giving",
    "Crowd funding",
    "Productivity",
    "Africa",
    "Charitable Giving",
  ],
  manifest: `/seo/site.webmanifest`,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
    startupImage: [
      "/seo/maskable-icon.png",
      {
        url: "/seo/maskable-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: "https://renamarkets.com",
    title: APP_NAME,
    description: DESC,
    images: {
      url: "/seo/og-image.png",
      alt: `${APP_NAME} og-image`,
    },
    type: "website",
    locale: "en_US",
  },
  twitter: {
    creator: "@todak",
    card: "summary_large_image",
    title: APP_NAME,
    description: DESC,
    images: {
      url: "/seo/og-image.png",
      alt: `${APP_NAME} og-image`,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="mask-icon" href="/seo/maskable-icon.png" />
      </Head>
      <body
        className={cn(
          "bg-background min-h-screen font-avenir antialiased",
          fontAvenir.variable
        )}
      >
        <TanstackProvider>
          <Layout>{children}</Layout>
        </TanstackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
