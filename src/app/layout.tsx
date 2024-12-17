import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flirtyfy",
  description: "LoveApp",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" >
      <body
      suppressHydrationWarning={true}
      >
        {children} 
      </body>
    </html>
  );
}
