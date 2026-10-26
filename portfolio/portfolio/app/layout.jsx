import "./globals.css";
import { Anton, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata = {
  title: "Elijah Adebayo | Multidisciplinary Designer & Developer",
  description:
    "Premium portfolio of Elijah Adebayo: motion design, video, websites and visual design, built with engineering precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'try{if(localStorage.getItem("xena-theme")==="alt")document.documentElement.setAttribute("data-theme","alt")}catch(e){}',
          }}
        />
      </head>
      <body className="cursor-none-zone">
        <Loader />
        <ScrollProgress />
        <Cursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
