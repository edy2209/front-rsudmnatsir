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
        {/* Optimized Google Fonts - only essential weights */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {/* Async load fonts to prevent blocking */}
        <Script 
          id="load-fonts"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap';
                document.head.appendChild(link);
              })();
            `
          }}
        />

        {children}

        {/* Userway Accessibility Widget - Lazy load */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="qEzV9kH8WW"
          strategy="lazyOnload"
        />

        {/* CSS override for Userway position - Mobile Only */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Mobile positioning only - tengah vertikal, mepet kanan */
            @media (max-width: 768px) {
              #userway-s1,
              [data-uw-launcher],
              .userway_p5,
              .uai,
              .uai-launcher,
              [id*="userway"],
              [class*="userway"] {
                position: fixed !important;
                top: 50% !important;
                right: 5px !important;
                bottom: auto !important;
                left: auto !important;
                transform: translateY(-50%) !important;
                z-index: 999999 !important;
                pointer-events: auto !important;
                cursor: pointer !important;
              }
            }
          `
        }} />

        {/* Position override script - Mobile Only */}
        <Script
          id="userway-position-fix"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              function forceUserwayPosition() {
                // Only apply on mobile
                const isMobile = window.innerWidth <= 768;
                if (!isMobile) {
                  return; // Skip on desktop
                }
                
                // Try to find ANY userway element
                const allElements = document.querySelectorAll('*');
                
                allElements.forEach(el => {
                  const id = el.id || '';
                  const className = el.className || '';
                  
                  // Check if element is related to userway
                  if (
                    id.toLowerCase().includes('userway') ||
                    className.toString().toLowerCase().includes('userway') ||
                    id.includes('uai') ||
                    className.toString().includes('uai') ||
                    el.hasAttribute('data-uw-launcher')
                  ) {
                    // Skip large panels
                    const width = el.offsetWidth || 0;
                    const height = el.offsetHeight || 0;
                    if (width > 300 || height > 300) {
                      return;
                    }
                    
                    if (el.style) {
                      try {
                        // Mobile: tengah vertikal, mepet kanan (5px)
                        el.style.setProperty('position', 'fixed', 'important');
                        el.style.setProperty('top', '50%', 'important');
                        el.style.setProperty('right', '5px', 'important');
                        el.style.setProperty('bottom', 'auto', 'important');
                        el.style.setProperty('left', 'auto', 'important');
                        el.style.setProperty('transform', 'translateY(-50%)', 'important');
                        el.style.setProperty('z-index', '999999', 'important');
                        el.style.setProperty('pointer-events', 'auto', 'important');
                        el.style.setProperty('cursor', 'pointer', 'important');
                        
                        console.log('Repositioned (mobile):', id || className);
                      } catch(e) {
                        console.log('Error:', e);
                      }
                    }
                  }
                });
              }
              
              // Only run on mobile
              if (window.innerWidth <= 768) {
                setTimeout(forceUserwayPosition, 1000);
                setTimeout(forceUserwayPosition, 2000);
                setTimeout(forceUserwayPosition, 3000);
                setTimeout(forceUserwayPosition, 4000);
                setTimeout(forceUserwayPosition, 5000);
                setTimeout(forceUserwayPosition, 6000);
                
                // Continuous monitoring on mobile
                if (typeof MutationObserver !== 'undefined') {
                  const observer = new MutationObserver(forceUserwayPosition);
                  observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['style', 'class']
                  });
                  
                  setTimeout(() => observer.disconnect(), 15000);
                }
              }
              
              // Run on resize only if becomes mobile
              window.addEventListener('resize', function() {
                if (window.innerWidth <= 768) {
                  forceUserwayPosition();
                }
              });
            `
          }}
        />
      </body>
    </html>
  );
}
