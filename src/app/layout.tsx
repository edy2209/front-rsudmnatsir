import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RSUD M. Natsir - Sistem Informasi Rumah Sakit",
  description: "Sistem Informasi Manajemen Rumah Sakit Umum Daerah M. Natsir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        
        {/* Userway Accessibility Widget */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="qEzV9kH8WW"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
