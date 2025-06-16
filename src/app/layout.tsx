import type { Metadata } from "next";
import "./globals.scss";
import "../../public/styles/utils/styles.scss";

export const metadata: Metadata = {
  title: "codereview",
  description: "какое то описание...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-lt-installed={true}>
      <body>{children}</body>
    </html>
  );
}
