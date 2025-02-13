import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter, Major_Mono_Display } from "next/font/google";
import cn from "classnames";
import ThemeSwitcher from "./_components/theme-switcher";
import "./globals.css";

// Import both fonts
const inter = Inter({ subsets: ["latin"] });
const majorMono = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Amy - Projects and Blog`,
  description: `A statically generated portfolio and blog website using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
      </head>
      <body className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
