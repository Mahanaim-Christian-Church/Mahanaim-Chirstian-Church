# Setup Guide for Mahanaim Christian Church Website

This guide will help church staff customize and maintain the website without technical expertise.

---

## 📝 Quick Customization Checklist

### 1. Update Church Information

**File:** `.env`

```env
PUBLIC_CHURCH_EMAIL=info@mahanaim.org          # Your church email
PUBLIC_CHURCH_PHONE=+1 (000) 000-0000          # Your phone number
PUBLIC_CHURCH_ADDRESS=123 Faith Avenue...      # Your address
PUBLIC_CHURCH_LAT=40.7128                      # Your latitude
PUBLIC_CHURCH_LNG=-74.0060                     # Your longitude
```

### 2. Add Your Church Logo

Replace `public/assets/logo.svg` with your church logo (SVG, PNG, or JPG format).

### 3. Update Leadership Team

**File:** `src/scripts/main.js`

Find the `initTeam()` function and update:

```javascript
const teamData = [
  {
    name: 'Your Pastor Name',
    role: 'Lead Pastor',
    image: '/assets/team/pastor-name.jpg',  // Add photo to public/assets/team/
    bio: 'Your pastor bio here...',
    social: { email: 'pastor@mahanaim.org' }
  },
  // Add more team members...
];
```

### 4. Add Testimonies

**File:** `src/scripts/main.js`

Find the `initTestimonies()` function:

```javascript
const testimonies = [
  {
    title: 'Your Testimony Title',
    summary: 'Brief summary of the testimony...',
    author: 'Person Name',
    image: '/assets/testimonies/photo.jpg'  // Add photo to public/assets/testimonies/
  },
  // Add more...
];
```

### 5. Update Events

**File:** `src/scripts/main.js`

Find the `initEvents()` function:

```javascript
const events = [
  {
    title: 'Your Event Name',
    date: 'July 15-17, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Campus',
    description: 'Event description...'
  },
  // Add more events...
];
```

### 6. Add Gallery Photos

1. Add images to `public/assets/gallery/`
2. **File:** `src/scripts/gallery.js`
3. Update the `galleryItems` array:

```javascript
const galleryItems = [
  { type: 'image', src: '/assets/gallery/your-photo.jpg', alt: 'Description' },
  { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID', alt: 'Video title' },
  // Add more...
];
```

### 7. Configure YouTube

**File:** `.env`

```env
PUBLIC_YOUTUBE_PLAYLIST_ID=PLxxxxxxxxxxxxxxxxxxxxxx
PUBLIC_YOUTUBE_CHANNEL_URL=https://www.youtube.com/@YourChannel
```

To get your playlist ID:
1. Go to YouTube
2. Open your playlist
3. Copy the ID from the URL: `youtube.com/playlist?list=PLxxxxxx`

### 8. Update Map Locations

**File:** `src/scripts/map.js`

Find the `locations` array:

```javascript
const locations = [
  {
    name: 'Your Church Name',
    lat: 40.7128,  // Get from Google Maps
    lng: -74.0060,
    address: 'Your address',
    description: 'Description...',
    image: '/assets/gallery/church-photo.jpg',
    stats: { attendance: '500+', established: '1995' },
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=LAT,LNG'
  },
  // Add more locations...
];
```

**How to get coordinates:**
1. Go to Google Maps
2. Right-click on your church location
3. Click the coordinates to copy them

### 9. Update FAQ

**File:** `src/scripts/main.js`

Find the `initFAQ()` function:

```javascript
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer...'
  },
  // Add more...
];
```

### 10. Setup Analytics

1. Create free account at [umami.is](https://umami.is)
2. Add your website
3. Copy Website ID
4. **File:** `.env`

```env
PUBLIC_UMAMI_WEBSITE_ID=your-website-id-here
```

---

## 🎨 Changing Colors

**File:** `src/style.css`

Find the `:root` section:

```css
:root {
  --color-primary: #C9A961;      /* Gold accent - change this */
  --color-bg: #F5F1E8;           /* Background - change this */
  --color-text: #2C2C2C;         /* Text color - change this */
}
```

Use a color picker tool to find hex codes for your brand colors.

---

## 📧 Form Submissions

Forms are sent to Formspree. To change the email destination:

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy the form endpoint
5. **File:** `.env`

```env
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

---

## 🖼️ Image Guidelines

### Recommended Sizes:
- **Logo:** 120x120px (SVG preferred)
- **Team Photos:** 400x400px (square)
- **Gallery Images:** 800x600px (landscape)
- **Testimonies:** 600x400px
- **OG Image:** 1200x630px (for social media)

### Formats:
- Use JPG for photos
- Use PNG for graphics with transparency
- Use SVG for logos (scalable)

### Optimization:
- Keep images under 500KB
- Use tools like [TinyPNG](https://tinypng.com) to compress

---

## 🚀 Publishing Changes

### Method 1: GitHub Web Interface (Easiest)

1. Go to your repository on GitHub
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Wait 2-3 minutes for automatic deployment

### Method 2: Local Development

```bash
# 1. Make your changes locally
# 2. Test locally
npm run dev

# 3. Build
npm run build

# 4. Commit and push
git add .
git commit -m "Updated church information"
git push origin main
```

---

## 🆘 Common Issues

### Images Not Showing
- Check file path starts with `/assets/`
- Verify image exists in `public/assets/` folder
- Check file name matches exactly (case-sensitive)

### Changes Not Appearing
- Wait 2-3 minutes after pushing to GitHub
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab for build errors

### Form Not Working
- Verify Formspree endpoint is correct
- Check email spam folder
- Ensure form fields have `name` attributes

### Map Not Loading
- Verify latitude/longitude are correct
- Check internet connection
- Ensure coordinates are numbers, not strings

---

## 📞 Getting Help

- **Email:** info@mahanaim.org
- **GitHub Issues:** Open an issue in your repository
- **Documentation:** See README.md for technical details

---

## 🔒 Security Reminders

- Never commit passwords or private API keys
- Use GitHub Secrets for sensitive data
- Keep `.env` file in `.gitignore`
- Only expose public API keys in frontend code

---

## ✅ Monthly Maintenance Checklist

- [ ] Update upcoming events
- [ ] Add new sermon videos
- [ ] Review and update FAQ
- [ ] Add new testimonies
- [ ] Update gallery with recent photos
- [ ] Check all links work
- [ ] Review analytics for insights
- [ ] Backup important content

---

**Last Updated:** January 2025
