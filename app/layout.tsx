import type { Metadata } from "next";
import { Poppins, Rubik_Dirt } from "next/font/google";
import "./globals.css";
import { getBasePath } from "@/lib/utils";
/* import {ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
 */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
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
  openGraph: {
    title: 'Wizard War',
    description: 'Diabolical Despots Wage War On All',
    images: [
      {
        url: `${getBasePath()}/images/ww-logo.svg`,
        width: 454,
        height: 98,
        alt: 'Wizard War Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wizard War',
    description: 'Diabolical Despots Wage War On All',
    images: [`${getBasePath()}/images/ww-logo.svg`],
    creator: '@yourtwitterhandle',
  },
  icons: {
    icon: [{ url: `${getBasePath()}/favicon.ico`, sizes: 'any' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
/*     <ClerkProvider appearance={{
      baseTheme: dark,
    }}> */
    <html lang="en">
      <body className={`${poppins.variable} ${rubikDirt.variable} font-sans antialiased`}>   
      
          {children}
      </body>
    </html>
   // </ClerkProvider>
  );
}
