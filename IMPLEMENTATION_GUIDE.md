# 🚀 Quick Implementation Guide - Beranda Page Optimization

## ⚡ Langkah Cepat untuk Update beranda/page.tsx

### Step 1: Import Image dari Next.js
Di bagian atas file `src/app/beranda/page.tsx`, tambahkan:

```tsx
import Image from 'next/image';
```

### Step 2: Wrap Components dengan memo
```tsx
import { useState, useEffect, useCallback, memo } from 'react';

// Wrap AutoImageSlider
const AutoImageSlider = memo(function AutoImageSlider() {
  // ... existing code
});

// Wrap HeroCarousel  
const HeroCarousel = memo(function HeroCarousel() {
  // ... existing code
});
```

### Step 3: Replace img tags dengan Image component

#### Location 1: AutoImageSlider Component (Line ~120-130)
**SEBELUM:**
```tsx
<img
  src={image.src}
  alt={image.alt}
  className="w-full h-full object-contain"
/>
```

**SESUDAH:**
```tsx
<Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-contain"
  priority={index === 0}
  quality={85}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### Location 2: HeroCarousel Component (Line ~220-235)
**SEBELUM:**
```tsx
<img
  src={images[currentSlide].src}
  alt={images[currentSlide].alt}
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.style.display = 'none';
  }}
  onLoad={(e) => {
    const fallbackDiv = e.currentTarget.previousElementSibling as HTMLElement;
    if (fallbackDiv) {
      fallbackDiv.style.display = 'none';
    }
  }}
/>
```

**SESUDAH:**
```tsx
<Image
  src={images[currentSlide].src}
  alt={images[currentSlide].alt}
  fill
  className="object-cover"
  priority={currentSlide === 0}
  quality={75}
  sizes="100vw"
  onError={(e) => {
    e.currentTarget.style.display = 'none';
  }}
/>
```

#### Location 3: Certificate Images (Line ~730-740)
**SEBELUM:**
```tsx
<img
  src={certificateSlides[currentCertificate]?.img}
  alt={certificateSlides[currentCertificate]?.name}
  className="w-full h-full object-cover"
/>
```

**SESUDAH:**
```tsx
<Image
  src={certificateSlides[currentCertificate]?.img}
  alt={certificateSlides[currentCertificate]?.name}
  fill
  className="object-cover"
  quality={75}
  sizes="(max-width: 768px) 100vw, 66vw"
/>
```

#### Location 4: Certificate Thumbnails (Line ~820-840)
**SEBELUM:**
```tsx
<img 
  src={item.img} 
  alt={item.name}
  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
/>
```

**SESUDAH:**
```tsx
<Image 
  src={item.img} 
  alt={item.name}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-300"
  quality={60}
  sizes="(max-width: 768px) 128px, 160px"
  loading="lazy"
/>
```

#### Location 5: News Images (Line ~900-920)
**SEBELUM:**
```tsx
<img 
  src={news.img}
  alt={news.title}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>
```

**SESUDAH:**
```tsx
<Image 
  src={news.img}
  alt={news.title}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
  quality={75}
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
/>
```

#### Location 6: Photo Album (Line ~1040-1060)
**SEBELUM:**
```tsx
<img 
  src={item.img}
  alt={item.title}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>
```

**SESUDAH:**
```tsx
<Image 
  src={item.img}
  alt={item.title}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
  quality={70}
  sizes="(max-width: 768px) 50vw, 200px"
  loading="lazy"
/>
```

---

### Step 4: Optimize Scroll Handler (Line ~480-500)

**SEBELUM:**
```tsx
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
```

**SESUDAH:**
```tsx
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

---

### Step 5: Use useCallback for handlers

```tsx
const handleCloseMarquee = useCallback(() => {
  setShowMarquee(false);
  localStorage.setItem('hideMarquee', 'true');
}, []);

const scrollToTop = useCallback(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

const nextSlide = useCallback(() => {
  setCurrentSlide((prev) => (prev + 1) % images.length);
}, [images.length]);

const prevSlide = useCallback(() => {
  setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
}, [images.length]);
```

---

### Step 6: Simplify/Remove Heavy Animations

Di Hero Section (Line ~615-625), **SIMPLIFY** blob animations:

**SEBELUM:**
```tsx
<div className="absolute inset-0 -z-10">
  <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
  <div className="absolute top-32 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
</div>
```

**SESUDAH (Remove animate-blob):**
```tsx
<div className="absolute inset-0 -z-10">
  <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
  <div className="absolute top-32 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
  <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
</div>
```

---

### Step 7: Simplify Scroll Progress Bar

Di Line ~575-595, simplify motion animation:

**SEBELUM:**
```tsx
<motion.div
  className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative"
  style={{ width: `${scrollProgress}%` }}
  initial={{ width: 0 }}
  animate={{ width: `${scrollProgress}%` }}
  transition={{ duration: 0.1 }}
>
  {/* Glowing effect */}
  <motion.div
    className="absolute top-0 right-0 w-2 h-full bg-white opacity-50 rounded-full"
    animate={{
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.5, 1]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</motion.div>
```

**SESUDAH (Remove motion, use simple CSS):**
```tsx
<div
  className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"
  style={{ width: `${scrollProgress}%` }}
/>
```

---

### Step 8: Simplify Mouse Scroll Icon

Di Line ~600-660, replace complex animation dengan simple CSS:

**SEBELUM:** (Complex motion with multiple animations)

**SESUDAH:**
```tsx
{!showBackToTop && (
  <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
    <div className="flex flex-col items-center space-y-3 animate-bounce">
      <div className="w-7 h-12 border-2 border-gray-500 rounded-full bg-white/10 backdrop-blur-sm flex justify-center relative">
        <div className="w-1 h-3 bg-gray-600 rounded-full mt-2" />
      </div>
      <p className="text-sm text-gray-600 font-medium">
        Scroll untuk lanjut
      </p>
    </div>
  </div>
)}
```

---

### Step 9: Simplify Back to Top Button

**SEBELUM:** (Line ~665-705)
```tsx
<motion.button
  initial={{ opacity: 0, scale: 0.5, y: 100 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.5, y: 100 }}
  whileHover={{ 
    scale: 1.1,
    boxShadow: "0 10px 30px rgba(34, 197, 94, 0.5)"
  }}
  whileTap={{ scale: 0.9 }}
  onClick={scrollToTop}
  className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
>
  <motion.div
    animate={{ y: [0, -3, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="text-xl font-bold"
  >
    ↑
  </motion.div>
  
  {/* Ripple Effect */}
  <motion.div
    className="absolute inset-0 rounded-full bg-white opacity-20"
    initial={{ scale: 0 }}
    animate={{ scale: [0, 1.5, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  />
  
  {/* Tooltip */}
  <motion.div className="...">
    Kembali ke atas
  </motion.div>
</motion.button>
```

**SESUDAH:**
```tsx
<motion.button
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.5 }}
  onClick={scrollToTop}
  className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
  aria-label="Back to top"
>
  <span className="text-xl font-bold">↑</span>
</motion.button>
```

---

### Step 10: Remove CSS Animations from globals.css

Di `src/app/globals.css`, **REMOVE** or **COMMENT OUT**:

```css
/* REMOVE atau COMMENT: */
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
*/
```

---

## ✅ Checklist

Setelah melakukan semua perubahan, pastikan:

- [ ] Import `Image` dari `next/image` ditambahkan
- [ ] Import `memo` dan `useCallback` ditambahkan
- [ ] Semua `<img>` tags di-replace dengan `<Image>`
- [ ] Components di-wrap dengan `memo()`
- [ ] Scroll handler menggunakan `requestAnimationFrame`
- [ ] Event handlers menggunakan `useCallback`
- [ ] Blob animations di-simplify/remove
- [ ] Complex motion animations di-reduce
- [ ] CSS keyframes untuk blob di-remove/comment

---

## 🧪 Testing

Setelah perubahan:

```bash
# 1. Build untuk production
npm run build

# 2. Run production build
npm run start

# 3. Open http://localhost:3000
# 4. Buka Chrome DevTools
# 5. Run Lighthouse Audit
# 6. Check Performance Score (harusnya 70-80+)
```

---

## 🎯 Expected Results

| Before | After |
|--------|-------|
| Performance: 30 | Performance: 70-80+ |
| FCP: ~4.5s | FCP: ~1.5-2s |
| LCP: ~6s | LCP: ~2.5-3s |
| TBT: ~1200ms | TBT: ~300-400ms |

---

## 💡 Tips

- Jika masih ada masalah, cek Console untuk errors
- Pastikan tidak ada missing imports
- Test di mobile dan desktop
- Monitor Network tab untuk image loading

---

*Ready to implement? Let's optimize! 🚀*
