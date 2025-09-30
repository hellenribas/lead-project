import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Leads App",
  description: "Painel de Leads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "var(--font-geist-sans), var(--font-geist-mono), sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: 'black'
        }}
      >
        <div
          style={{
            flex: 1,
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
