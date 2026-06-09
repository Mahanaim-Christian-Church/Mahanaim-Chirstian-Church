# Simple Customization Guide

**For Church Staff Without Technical Experience**

---

## 🎯 What You Can Easily Change

### ✏️ Text Content

Most text can be changed by editing files in the `src/scripts/` folder using GitHub's web editor.

**No coding knowledge needed!** Just find the text you want to change and type new text.

---

## 📝 Step-by-Step: Update Leadership Team

1. Go to your GitHub repository
2. Click on `src` → `scripts` → `main.js`
3. Click the pencil icon (✏️ Edit)
4. Find this section (around line 50):

```javascript
const teamData = [
  {
    name: 'Pastor John Smith',           // ← Change this
    role: 'Lead Pastor & Founder',       // ← Change this
    image: '/assets/team/pastor-john.jpg',
    bio: 'Serving faithfully for over 25 years...',  // ← Change this
    social: { email: 'pastor.john@mahanaim.org' }    // ← Change this
  },
```

5. Change the text between the quotes `'like this'`
6. Scroll to bottom and click "Commit changes"
7. Wait 2-3 minutes and refresh your website

---

## 📸 Step-by-Step: Add Photos

### For Team Photos:

1. Prepare your photo (400x400 pixels, JPG format)
2. Name it clearly: `pastor-john.jpg`
3. In GitHub, go to `public` → `assets` → `team`
4. Click "Add file" → "Upload files"
5. Drag your photo
6. Click "Commit changes"
7. Update the file name in `main.js` (see above)

### For Gallery Photos:

1. Prepare photos (800x600 pixels recommended)
2. Go to `public` → `assets` → `gallery`
3. Upload your photos
4. Edit `src/scripts/gallery.js`
5. Add your photo to the list:

```javascript
{ type: 'image', src: '/assets/gallery/your-photo.jpg', alt: 'Description' },
```

---

## 📅 Step-by-Step: Update Events

1. Go to `src` → `scripts` → `main.js`
2. Click Edit (pencil icon)
3. Find the `initEvents()` function
4. Change or add events:

```javascript
{
  title: 'Summer Youth Camp',           // Event name
  date: 'August 10-15, 2025',          // When
  time: '9:00 AM - 5:00 PM',           // Time
  location: 'Main Campus',              // Where
  description: 'A week of fun...'       // Details
},
```

5. Commit changes

---

## 🎥 Step-by-Step: Add YouTube Videos

### Easy Way (Playlist):

1. Create a YouTube playlist with all your sermons
2. Get the playlist ID from the URL:
   - URL: `youtube.com/playlist?list=PLxxxxxxxxxxxxxx`
   - Copy the part after `list=`
3. Go to your repository settings
4. Go to "Secrets and variables" → "Actions"
5. Add secret: `PUBLIC_YOUTUBE_PLAYLIST_ID`
6. Paste your playlist ID

### Manual Way (Individual Videos):

1. Go to `src` → `scripts` → `main.js`
2. Find `initMedia()` function
3. Add videos:

```javascript
{ id: 'REPLACE_WITH_VIDEO_ID', title: 'Sunday Sermon: Faith' },
```

The `id` is from the YouTube URL: `youtube.com/watch?v=REPLACE_WITH_VIDEO_ID`

---

## 💬 Step-by-Step: Add Testimonies

1. Go to `src` → `scripts` → `main.js`
2. Find `initTestimonies()`
3. Add new testimony:

```javascript
{
  title: 'God Healed My Family',
  summary: 'After years of struggle, God restored...',
  author: 'Sarah M.',
  image: '/assets/testimonies/sarah.jpg'
},
```

4. Upload photo to `public/assets/testimonies/`
5. Commit changes

---

## ❓ Step-by-Step: Update FAQ

1. Go to `src` → `scripts` → `main.js`
2. Find `initFAQ()`
3. Add or change questions:

```javascript
{
  question: 'What should I wear to church?',
  answer: 'Come as you are! We welcome everyone...'
},
```

---

## 🗺️ Step-by-Step: Update Church Location

1. Go to Google Maps
2. Find your church
3. Right-click on the location
4. Click the coordinates to copy (e.g., `40.7128, -74.0060`)
5. Go to your repository Settings
6. Secrets and variables → Actions
7. Add these secrets:
   - `PUBLIC_CHURCH_LAT` = `40.7128`
   - `PUBLIC_CHURCH_LNG` = `-74.0060`
   - `PUBLIC_CHURCH_ADDRESS` = `123 Faith Avenue, City, State`

---

## 📧 Step-by-Step: Change Contact Email

1. Go to repository Settings
2. Secrets and variables → Actions
3. Add secret: `PUBLIC_CHURCH_EMAIL`
4. Value: `info@yourchurch.org`

---

## 🎨 Step-by-Step: Change Colors

1. Go to `src` → `style.css`
2. Find the `:root {` section at the top
3. Change color codes:

```css
--color-primary: #C9A961;    /* Gold - change to your color */
--color-bg: #F5F1E8;         /* Background */
--color-text: #2C2C2C;       /* Text */
```

**Finding color codes:**
- Use Google: "color picker"
- Copy the hex code (e.g., `#C9A961`)

---

## ⚠️ Important Tips

### ✅ DO:
- Make small changes and test
- Keep backups of original text
- Use clear, descriptive file names
- Compress images before uploading

### ❌ DON'T:
- Delete code you don't understand
- Change file names without updating references
- Upload huge images (keep under 500KB)
- Share passwords or API keys publicly

---

## 🆘 If Something Breaks

1. **Don't panic!** GitHub keeps history of all changes
2. Go to the file you edited
3. Click "History" button
4. Find the last working version
5. Click "..." → "View file"
6. Copy the old content
7. Edit current file and paste old content back
8. Commit with message: "Restored previous version"

---

## 📞 Need Help?

- **Can't find something?** Use GitHub's search (press `/` key)
- **Made a mistake?** Check the History tab
- **Still stuck?** Email: info@mahanaim.org

---

## 🎓 Learning Resources

- **GitHub Basics:** [GitHub Guides](https://guides.github.com)
- **Image Editing:** [Canva](https://canva.com) (free)
- **Image Compression:** [TinyPNG](https://tinypng.com)
- **Color Picker:** [Google Color Picker](https://g.co/kgs/colorpicker)

---

**Remember:** You can't permanently break anything! GitHub saves every version, so you can always go back.

**Last Updated:** January 2025
