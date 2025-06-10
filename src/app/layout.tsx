"use client";

// import type { Metadata } from "next";
import "./globals.scss";
import "../../public/styles/utils/styles.scss";
import "../../public/styles/utils/typography.scss";
import { Metadata } from "next";
/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

// export const metadata: Metadata = {
//   title: "codereview",
//   description: "какое то описание...",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" data-lt-installed="true" suppressHydrationWarning={true}>
//       <body /*className={`${geistSans.variable} ${geistMono.variable}`}*/>{children}</body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-lt-installed={true}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
