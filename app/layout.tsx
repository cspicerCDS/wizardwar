import type { Metadata } from "next";
import { Poppins, Rubik_Dirt } from "next/font/google";
import "./globals.css";
import { getBasePath } from "@/lib/utils";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

const rubikDirt = Rubik_Dirt({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rubik-dirt',
});

export const metadata: Metadata = {
  title: "Wizard War",
  description: "Diabolical Despots Wage War On All",
  icons: {
    icon: [
      {
        url: `${getBasePath()}/favicon.ico`,
        sizes: 'any',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubikDirt.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
