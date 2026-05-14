import type { Metadata } from "next";
import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ratnagirifiltercoffee.vercel.app"),
  title: "RATNAGIRI FILTER COFFEE | Authentic South Indian Coffee",
  description:
    "Experience authentic South Indian filter coffee in Kukatpally, Hyderabad. Premium coffee, warm ambience, rich aroma, and traditional taste.",
  keywords: [
    "Ratnagiri Filter Coffee",
    "South Indian filter coffee",
    "coffee shop Hyderabad",
    "Kukatpally cafe",
    "authentic filter coffee",
    "cold coffee",
    "iced tea",
    "premium coffee",
  ],
  authors: [{ name: "Ratnagiri Filter Coffee" }],
  creator: "Ratnagiri Filter Coffee",
  publisher: "Ratnagiri Filter Coffee",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ratnagiri Filter Coffee",
    title: "RATNAGIRI FILTER COFFEE | Authentic South Indian Coffee",
    description:
      "Experience authentic South Indian filter coffee in Kukatpally, Hyderabad. Premium coffee, warm ambience, rich aroma, and traditional taste.",
    images: [
      {
        url: "/assets/ratnagiri-logo.jpg",
        alt: "Ratnagiri Filter Coffee logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RATNAGIRI FILTER COFFEE | Authentic South Indian Coffee",
    description:
      "Experience authentic South Indian filter coffee in Kukatpally, Hyderabad. Premium coffee, warm ambience, rich aroma, and traditional taste.",
    images: ["/assets/ratnagiri-logo.jpg"],
  },
  icons: {
    icon: [{ url: "/assets/ratnagiri-logo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/assets/ratnagiri-logo.jpg", type: "image/jpeg" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Food & Beverage",
  applicationName: "Ratnagiri Filter Coffee",
  other: {
    contact: "+91 63037 19920",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant_upright.variable} ${open_sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
