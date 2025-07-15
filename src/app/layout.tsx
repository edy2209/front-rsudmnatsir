import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSUD M. Natsir - Rumah Sakit Umum Daerah",
  description: "Rumah Sakit Umum Daerah M. Natsir - Melayani dengan Hati, Mengobati dengan Profesional",
  icons: {
    icon: [
      {
        url: '/images/logos/logo1.webp',
        sizes: '32x32',
        type: 'image/webp',
      },
      {
        url: '/images/logos/logo1.webp',
        sizes: '16x16',
        type: 'image/webp',
      }
    ],
    apple: {
      url: '/images/logos/logo1.webp',
      sizes: '180x180',
      type: 'image/webp',
    }
  },
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
        
        {/* Userway Accessibility Widget
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="qEzV9kH8WW"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
