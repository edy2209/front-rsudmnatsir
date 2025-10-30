import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}

        {/* Userway Accessibility Widget */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="qEzV9kH8WW"
          strategy="afterInteractive"
        />

        {/* Position override script */}
        <Script
          id="userway-position-fix"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function forceUserwayPosition() {
                setTimeout(() => {
                  const selectors = [
                    '#userway-s1',
                    '[data-uw-launcher]',
                    '.userway_p5',
                    '#uw-launcher',
                    '.uw-launcher',
                    '[id*="userway"]',
                    '[class*="userway"]'
                  ];
                  
                  selectors.forEach(selector => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(el => {
                      if (el && el.style) {
                        // Skip large panels/modals (kontras panel biasanya besar)
                        if (el.offsetWidth > 300 || el.offsetHeight > 300) {
                          return; // Skip elemen besar
                        }
                        
                        el.style.position = 'fixed';
                        el.style.bottom = '20px';
                        el.style.left = '20px';
                        el.style.right = 'auto';
                        el.style.top = 'auto';
                        el.style.zIndex = '999999';
                        el.style.transform = 'none';
                      }
                    });
                  });
                }, 100);
              }
              
              // Wait for widget to load
              setTimeout(forceUserwayPosition, 2000);
              
              // Check periodically
              setInterval(forceUserwayPosition, 3000);
            `
          }}
        />
      </body>
    </html>
  );
}
