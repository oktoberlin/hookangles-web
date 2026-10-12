import type { Metadata } from "next";
import { Gloock, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const gloock = Gloock({ weight: "400", subsets: ["latin"], variable: "--font-gloock", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const title = "Hook Angles — stop opening with “I came across your post.”";
const description =
  "Paste an offer, a service, or a job post. Get 6–8 distinct opening hooks for proposals, cold emails, and ads — each one ready to send.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hookangles.com"),
  title,
  description,
  openGraph: { title, description, url: "https://hookangles.com", siteName: "Hook Angles", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// Runs before paint so the saved/system theme never flashes.
const themeInit = `try{var t=localStorage.getItem("ha-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-accent="Vermilion"
      suppressHydrationWarning
      className={`${gloock.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
