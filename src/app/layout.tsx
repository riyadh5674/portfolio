import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riyadh5674.github.io/portfolio"),
  title: "MD RIYAD — Computer Science, Machine Learning & Research",
  description:
    "Computer Science and Engineering student researching machine learning from practical and mathematical perspectives. Investigating physics-guided flood prediction, building creative software, and exploring robotics.",
  keywords: [
    "MD RIYAD",
    "Machine Learning",
    "Computer Science",
    "Research",
    "Flood Prediction",
    "Artificial Intelligence",
    "Software Engineering",
    "Robotics",
    "State University of Bangladesh",
  ],
  authors: [{ name: "MD RIYAD" }],
  openGraph: {
    title: "MD RIYAD — Computer Science, Machine Learning & Research",
    description:
      "Researching intelligent systems. Building thoughtful software. Exploring how mathematics, algorithms, and engineering come together.",
    type: "website",
    locale: "en_US",
    siteName: "MD RIYAD — Portfolio",
    images: [
      {
        url: "/portfolio/og.png",
        width: 1200,
        height: 630,
        alt: "MD RIYAD — Computer Science, Machine Learning & Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD RIYAD — Computer Science, Machine Learning & Research",
    description:
      "Researching intelligent systems. Building thoughtful software.",
    images: ["/portfolio/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a6b5a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
