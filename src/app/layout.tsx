import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDb",
  description: "Imdb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col items-start">
            <Header />
            <Navbar />
            <div className="px-[5%] lg:px-[10%] pt-5 w-full">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
