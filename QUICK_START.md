# 🚀 Quick Start Guide

## Start Development Server

```bash
bun run dev
```

Then open: **http://localhost:5173**

---

## ✅ Pre-Launch Checklist

### **Critical (Do Before Going Live):**

- [ ] Update WhatsApp number in `/src/components/WhatsAppButton.jsx` (line 5)
- [ ] Add profile photo to `/public/images/profile-photo.jpg`
- [ ] Update project links in `/src/components/Portfolio.jsx` (replace `#` with real URLs)
- [ ] Test mobile menu on actual mobile device
- [ ] Test all links work correctly

### **Recommended:**

- [ ] Replace Unsplash images with real project screenshots
- [ ] Update testimonials with real client feedback
- [ ] Adjust stats numbers to match your experience
- [ ] Test form submission (Formspree)
- [ ] Test WhatsApp button link
- [ ] Check all sections on mobile

---

## 🎯 What's New

1. **Mobile Menu** - Tap hamburger icon to test
2. **Portfolio Filters** - Click filter buttons (All, Client, Personal, Open Source)
3. **Testimonials** - Navigate with arrows or dots
4. **Stats** - Scroll to see animated counters
5. **WhatsApp Button** - Bottom-right floating button
6. **Back to Top** - Bottom-left button (appears after scrolling)
7. **Scroll Indicator** - Animated mouse icon in hero section

---

## 📱 Test on Mobile

1. Open DevTools (F12)
2. Click device toolbar icon (Cmd+Shift+M)
3. Select iPhone or Android device
4. Test:
   - Mobile menu
   - Portfolio filters
   - Testimonials swipe
   - All buttons and links

---

## 🐛 Troubleshooting

### **Mobile menu not working?**
- Check browser console for errors
- Ensure Framer Motion is installed: `bun install framer-motion`

### **Images not loading?**
- Check internet connection (using Unsplash CDN)
- Or replace with local images in `/public/images/`

### **Stats not animating?**
- Scroll down to trigger animation
- Check if `useInView` is working

---

## 🎨 Customization Tips

### **Change Primary Color:**
Edit `/tailwind.config.js`:
```js
colors: {
  primary: {
    DEFAULT: '#FF5F1F', // Change this
    light: '#FF7F50',
    dark: '#E65100',
  }
}
```

### **Update WhatsApp Message:**
Edit `/src/components/WhatsAppButton.jsx` line 6:
```js
const message = "Your custom message here";
```

### **Add More Projects:**
Edit `/src/components/Portfolio.jsx` - add to `projects` array

### **Modify Stats:**
Edit `/src/components/Stats.jsx` - update `stats` array

---

## 📦 Build for Production

```bash
bun run build
```

Output will be in `/dist` folder.

### **Deploy to:**
- Vercel: `vercel --prod`
- Netlify: Drag `/dist` folder to Netlify
- GitHub Pages: Push `/dist` to `gh-pages` branch

---

## 🔧 Development Commands

```bash
# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint code
bun run lint
```

---

## 📞 Need Help?

Check:
1. Browser console for errors
2. `UPDATES_SUMMARY.md` for detailed changes
3. Ensure all dependencies installed: `bun install`

---

**Happy coding! 🎉**
