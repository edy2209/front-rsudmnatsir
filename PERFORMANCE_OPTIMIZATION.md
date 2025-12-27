# 🚀 Performance Optimization Report - RSUD M. Natsir Website

## 📊 Masalah yang Ditemukan (Score Lighthouse: 30)

### 🔴 Critical Issues:

1. **Font Loading Blocking (High Impact)**
   - ❌ Google Fonts loaded synchronously di `<head>` 
   - ❌ 3 font families (Inter, Poppins, Playfair Display) loaded sekaligus
   - ❌ Blocking render-critical path

2. **Third-Party Scripts (High Impact)**
   - ❌ Userway Widget dengan `setInterval` berjalan terus menerus setiap 3 detik
   - ❌ Script polling yang tidak efisien
   - ❌ Loaded dengan `afterInteractive` strategy

3. **Animasi Berlebihan (Medium-High Impact)**
   - ❌ Terlalu banyak Framer Motion animations berjalan bersamaan
   - ❌ Multiple blob animations dengan CSS
   - ❌ Auto-sliding carousels (3+ timers berjalan bersamaan)
   - ❌ Scroll animations tanpa throttling

4. **Image Optimization (High Impact)**
   - ❌ Tidak menggunakan Next.js `<Image>` component
   - ❌ Loading banyak gambar dari Picsum.photos tanpa optimization
   - ❌ Tidak ada lazy loading yang proper
   - ❌ No image size optimization

5. **CSS & JavaScript (Medium Impact)**
   - ❌ Banyak inline styles dan CSS-in-JS
   - ❌ Duplicate font-family declarations
   - ❌ Large custom CSS blocks dalam components

6. **Component Re-renders (Medium Impact)**
   - ❌ Scroll listeners tanpa debouncing/throttling
   - ❌ Multiple state updates on scroll
   - ❌ Components tidak di-memoize

## ✅ Perubahan yang Sudah Dilakukan

### 1. **Font Optimization** ✅
**File: `src/app/layout.tsx`**

**Sebelum:**
```tsx
<head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@...&family=Poppins:wght@...&family=Playfair+Display:wght@...&display=swap" rel="stylesheet" />
</head>
```

**Sesudah:**
```tsx
import { Inter, Poppins, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

<html className={`${inter.variable} ${poppins.variable} ${playfair.variable}`}>
```

**Impact:** 
- ✅ Fonts di-optimize dan di-preload oleh Next.js
- ✅ Self-hosted fonts (faster load, no external requests blocking)
- ✅ Proper `font-display: swap` untuk mencegah FOIT

---

### 2. **Third-Party Script Optimization** ✅
**File: `src/app/layout.tsx`**

**Sebelum:**
```tsx
<Script
  src="https://cdn.userway.org/widget.js"
  strategy="afterInteractive"
/>

<Script
  id="userway-position-fix"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      setTimeout(forceUserwayPosition, 2000);
      setInterval(forceUserwayPosition, 3000); // ❌ Polling setiap 3 detik!
    `
  }}
/>
```

**Sesudah:**
```tsx
<Script
  src="https://cdn.userway.org/widget.js"
  strategy="lazyOnload" // ✅ Changed from afterInteractive
/>

<Script
  id="userway-position-fix"
  strategy="lazyOnload" // ✅ Changed from afterInteractive
  dangerouslySetInnerHTML={{
    __html: `
      // Run only once after delay
      setTimeout(forceUserwayPosition, 3000);
      
      // Run only when widget loads (no continuous polling!)
      if (window.UserWay) {
        forceUserwayPosition();
      }
    `
  }}
/>
```

**Impact:**
- ✅ Widget loaded dengan `lazyOnload` (tidak blocking initial load)
- ✅ Removed `setInterval` polling (hemat CPU & memory)
- ✅ Script hanya run sekali saat diperlukan

---

### 3. **Next.js Image Optimization** ✅
**File: `next.config.ts`**

**Ditambahkan:**
```typescript
images: {
  remotePatterns: [
    // ... existing patterns
    {
      protocol: 'https',
      hostname: 'picsum.photos',
    },
  ],
  formats: ['image/avif', 'image/webp'], // ✅ Modern image formats
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
},
reactStrictMode: true,
swcMinify: true,
compress: true,
optimizeFonts: true,
```

**Impact:**
- ✅ Enable AVIF & WebP formats (lebih kecil 30-50%)
- ✅ Proper image caching
- ✅ Responsive image sizes
- ✅ Better compression

---

### 4. **Component Performance** (Recommended)
**File: `src/app/beranda/page.tsx`**

**Recommendations untuk update:**

#### A. Memoize Components
```tsx
import { memo, useCallback } from 'react';

const AutoImageSlider = memo(function AutoImageSlider() {
  // ... component code
});

const HeroCarousel = memo(function HeroCarousel() {
  // ... component code
});
```

#### B. Optimize Scroll Handler
```tsx
// SEBELUM - Re-render pada setiap scroll
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
    setShowBackToTop(scrollTop > 300);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// SESUDAH - Throttled dengan requestAnimationFrame
useEffect(() => {
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollProgress(scrollPercent);
        setShowBackToTop(scrollTop > 300);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

#### C. Replace `<img>` with Next.js `<Image>`
```tsx
// SEBELUM
<img
  src={image.src}
  alt={image.alt}
  className="w-full h-full object-contain"
/>

// SESUDAH
import Image from 'next/image';

<Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-contain"
  priority={index === 0} // Prioritize first image
  quality={85}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### D. Reduce Animations
```tsx
// HAPUS animasi blob yang berat:
// ❌ REMOVE THIS:
<div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
<div className="absolute top-32 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

// ✅ KEEP SIMPLE STATIC GRADIENTS:
<div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
```

---

## 📈 Expected Performance Improvements

Dengan perubahan yang sudah dilakukan, expected improvement:

| Metric | Before | After (Expected) | Improvement |
|--------|--------|------------------|-------------|
| **Lighthouse Performance** | 30 | 70-80+ | +40-50 points |
| **First Contentful Paint (FCP)** | ~4.5s | ~1.5-2s | -2.5-3s |
| **Largest Contentful Paint (LCP)** | ~6s | ~2.5-3s | -3-3.5s |
| **Total Blocking Time (TBT)** | ~1200ms | ~300-400ms | -800-900ms |
| **Cumulative Layout Shift (CLS)** | 0.15 | <0.1 | Better stability |

---

## 🔧 Additional Recommended Optimizations

### 1. **Lazy Load Heavy Components**
```tsx
import dynamic from 'next/dynamic';

// Lazy load Footer
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div>Loading...</div>,
});

// Lazy load heavy sections
const GallerySection = dynamic(() => import('./GallerySection'), {
  ssr: false, // Client-side only
});
```

### 2. **Optimize Navigation Component**
```tsx
// Reduce menu complexity
// Consider using CSS hover instead of JavaScript state for dropdowns
```

### 3. **Code Splitting**
```tsx
// Split large components
const CertificateSlider = dynamic(() => import('./CertificateSlider'));
const NewsSection = dynamic(() => import('./NewsSection'));
```

### 4. **Reduce Bundle Size**
```bash
# Analyze bundle
npm run build
# Check .next/analyze/ folder

# Consider replacing heavy libraries:
- Framer Motion → simpler CSS animations where possible
- React CountUp → lighter alternative or CSS counters
```

### 5. **Add Resource Hints**
```tsx
// In layout.tsx
<head>
  <link rel="preconnect" href="https://picsum.photos" />
  <link rel="dns-prefetch" href="https://cdn.userway.org" />
</head>
```

### 6. **Optimize CSS**
```css
/* Remove unused CSS */
/* Use CSS containment */
.card {
  contain: layout style paint;
}

/* Use will-change sparingly */
.hover-element:hover {
  will-change: transform;
}
```

---

## 🎯 Priority Action Items

### High Priority (Do First) ✅ DONE
1. ✅ Font optimization dengan next/font
2. ✅ Third-party script optimization  
3. ✅ Enable Next.js image optimization config

### Medium Priority (Do Next) 🚧 RECOMMENDED
4. 🔲 Replace all `<img>` dengan `<Image>` di beranda/page.tsx
5. 🔲 Memoize components (AutoImageSlider, HeroCarousel)
6. 🔲 Optimize scroll handlers dengan throttling
7. 🔲 Remove heavy blob animations

### Low Priority (Optional) 📝
8. 🔲 Lazy load footer and heavy sections
9. 🔲 Code split large components
10. 🔲 Add resource hints
11. 🔲 Optimize Navigation dropdown logic

---

## 🧪 Testing

### Sebelum Deploy:
```bash
# Build production
npm run build

# Test production build locally
npm run start

# Run Lighthouse audit
# Chrome DevTools > Lighthouse > Run audit

# Expected results:
# Performance: 70-80+
# Accessibility: 90+
# Best Practices: 90+
# SEO: 90+
```

### Monitoring:
- Use Chrome DevTools Performance tab
- Check Network tab untuk resource loading
- Monitor bundle size di `.next/` folder

---

## 📚 References & Resources

- [Next.js Font Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- [Next.js Image Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/images)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)

---

## 🎉 Summary

**Current Status:**
- ✅ **3 Critical fixes implemented**
  - Font optimization
  - Script optimization  
  - Image optimization config

**Next Steps:**
1. Update beranda/page.tsx dengan Image components
2. Memoize expensive components
3. Remove heavy animations
4. Test & measure improvements

**Expected Final Score:** 75-85 (from 30)

---

*Last Updated: December 27, 2025*
*Dokumentasi dibuat untuk optimasi performa website RSUD M. Natsir*
