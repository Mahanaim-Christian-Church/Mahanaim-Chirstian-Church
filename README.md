# Mahanaim Christian Church Website

## Authorized Article Publishing

Articles are managed through Decap CMS at `/admin/` and saved as Markdown files in `src/content/articles`.

Because this site is hosted on GitHub Pages, GitHub login requires an OAuth proxy. Update `public/admin/config.yml` and replace `https://REPLACE_WITH_YOUR_OAUTH_PROXY_URL` with your configured GitHub OAuth proxy URL. Only GitHub users with authorized repository access can publish changes.

A modern, production-ready church website built with **Astro**, optimized for **GitHub Pages**, featuring elegant design, comprehensive SEO, AI-search optimization, privacy-focused analytics, and an immersive Bible reading experience.

---

## 🌟 Features

### Core Functionality
- ✅ **Responsive Design** — Mobile-first, works beautifully on all devices
- ✅ **Bible Reading Experience** — Full NKJV Bible integration with search, navigation, and recently read tracking
- ✅ **Interactive Map** — Leaflet-powered map with custom styled popups for church locations
- ✅ **Media Library** — YouTube playlist integration for sermons and worship videos
- ✅ **Event Registration** — Formspree-powered registration form with validation
- ✅ **Photo Gallery** — Touch-enabled slider for ministry photos and videos
- ✅ **FAQ Section** — Expandable accordion for common questions
- ✅ **Team Profiles** — Leadership and ministry team showcase

### SEO & Discoverability
- ✅ **Semantic HTML5** — Proper heading hierarchy and ARIA labels
- ✅ **Schema.org JSON-LD** — Structured data for Church, Events, FAQs, Videos
- ✅ **Open Graph & Twitter Cards** — Rich social media previews
- ✅ **Sitemap & Robots.txt** — Automatic generation via Astro
- ✅ **Canonical URLs** — Custom domain support
- ✅ **Meta Descriptions** — Unique, descriptive metadata per page
- ✅ **AI-Search Optimized** — Natural content structure for answer engines

### Analytics & Privacy
- ✅ **Umami Analytics** — Privacy-focused, GDPR-compliant tracking
- ✅ **Custom Event Tracking** — Page views, CTA clicks, form submissions, Bible interactions, map engagement, video plays, slider interactions
- ✅ **No Cookies** — Cookieless analytics
- ✅ **Privacy Policy** — Transparent data practices

### Performance & Hosting
- ✅ **Static Site Generation** — Fast, secure, CDN-ready
- ✅ **GitHub Pages Deployment** — Free hosting with GitHub Actions
- ✅ **Optimized Assets** — Lazy loading, efficient CSS/JS
- ✅ **Accessibility** — WCAG compliant, keyboard navigable

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and npm
- **Git**
- **GitHub account** (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Mahanaim-Chirstian-Church.git
   cd Mahanaim-Chirstian-Church
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your settings (see [Configuration](#-configuration) below).

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321)

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory (use `.env.example` as a template):

```env
# Site Configuration
PUBLIC_SITE_URL=https://yourusername.github.io/Mahanaim-Chirstian-Church
PUBLIC_CANONICAL_DOMAIN=https://mahanaim.org

# Umami Analytics
PUBLIC_UMAMI_WEBSITE_ID=your-website-id-here
PUBLIC_UMAMI_SCRIPT_URL=https://analytics.umami.is/script.js

# Bible API (NKJV)
# Note: The default Bible API (bible-api.com) is public and doesn't require a key
PUBLIC_BIBLE_API_KEY=

# YouTube
PUBLIC_YOUTUBE_PLAYLIST_ID=PLxxxxxxxxxxxxxxxxxxxxxx
PUBLIC_YOUTUBE_CHANNEL_URL=https://www.youtube.com/@MahanamiChurch

# Church Location (for map)
PUBLIC_CHURCH_LAT=40.7128
PUBLIC_CHURCH_LNG=-74.0060
PUBLIC_CHURCH_ADDRESS=123 Faith Avenue, City, State 00000

# Contact
PUBLIC_CHURCH_EMAIL=info@mahanaim.org
PUBLIC_CHURCH_PHONE=+1 (000) 000-0000

# Form Submission
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mnjokoon
```

### Astro Configuration

Edit `astro.config.mjs` to set your GitHub Pages URL:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/Mahanaim-Chirstian-Church',
  // ...
});
```

---

## 📦 Deployment to GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### Step 2: Configure GitHub Secrets

Add your environment variables as **Repository Secrets**:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add each variable from your `.env` file (optional, but recommended for production)

**Required secrets:**
- `PUBLIC_UMAMI_WEBSITE_ID`
- `PUBLIC_YOUTUBE_PLAYLIST_ID`
- `PUBLIC_CHURCH_LAT`
- `PUBLIC_CHURCH_LNG`
- `PUBLIC_FORMSPREE_ENDPOINT`

**Optional secrets:**
- `PUBLIC_CANONICAL_DOMAIN` (if using a custom domain)
- `PUBLIC_BIBLE_API_KEY` (if using a paid API)

### Step 3: Deploy

Push to the `main` branch:

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

GitHub Actions will automatically build and deploy your site. Check the **Actions** tab for progress.

### Step 4: Custom Domain (Optional)

To use a custom domain like `mahanaim.org`:

1. Add a `CNAME` file to the `public/` folder with your domain:
   ```
   mahanaim.org
   ```

2. Configure DNS with your domain provider:
   - **A Records** pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record** for `www` pointing to `yourusername.github.io`

3. In GitHub repository settings → Pages, enter your custom domain and enable **Enforce HTTPS**.

4. Update `PUBLIC_CANONICAL_DOMAIN` in your environment variables.

---

## 🎨 Customization Guide

### 1. Church Information

**Logo:** Replace `public/assets/logo.svg` with your church logo.

**Contact Details:** Update in:
- `.env` file
- `src/index.html` (footer section)

**Service Times:** Edit in `src/scripts/main.js` → `initEvents()` function.

### 2. Leadership Team

Edit `src/scripts/main.js` → `initTeam()` function:

```javascript
const teamData = [
  {
    name: 'Pastor John Smith',
    role: 'Lead Pastor & Founder',
    image: '/assets/team/pastor-john.jpg',
    bio: 'Your bio here...',
    social: { email: 'pastor.john@mahanaim.org' }
  },
  // Add more team members...
];
```

Add team photos to `public/assets/team/`.

### 3. Testimonies

Edit `src/scripts/main.js` → `initTestimonies()` function:

```javascript
const testimonies = [
  {
    title: 'A Life Transformed',
    summary: 'Your testimony summary...',
    author: 'Maria G.',
    image: '/assets/testimonies/testimony-1.jpg'
  },
  // Add more testimonies...
];
```

### 4. Events

Edit `src/scripts/main.js` → `initEvents()` function to add/modify events.

### 5. Gallery

Edit `src/scripts/gallery.js` → `galleryItems` array:

```javascript
const galleryItems = [
  { type: 'image', src: '/assets/gallery/worship-1.jpg', alt: 'Sunday worship' },
  { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID', alt: 'Video title' },
  // Add more items...
];
```

Add images to `public/assets/gallery/`.

### 6. Map Locations

Edit `src/scripts/map.js` → `locations` array:

```javascript
const locations = [
  {
    name: 'Mahanaim Christian Church - Main Campus',
    lat: 40.7128,
    lng: -74.0060,
    address: '123 Faith Avenue, City, State 00000',
    description: 'Your description...',
    image: '/assets/gallery/church-1.jpg',
    stats: { attendance: '500+', established: '1995' },
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=40.7128,-74.0060'
  },
  // Add more locations...
];
```

### 7. YouTube Videos

Edit `src/scripts/main.js` → `initMedia()` function:

```javascript
const videos = [
  { id: 'YOUR_VIDEO_ID', title: 'Sunday Sermon: Walking in Faith' },
  // Add more videos...
];
```

Or set `PUBLIC_YOUTUBE_PLAYLIST_ID` in `.env` to auto-fetch from a playlist (requires additional API integration).

### 8. FAQ

Edit `src/scripts/main.js` → `initFAQ()` function to add/modify questions.

### 9. Colors & Branding

Edit `src/style.css` → CSS custom properties:

```css
:root {
  --color-primary: #C9A961;      /* Gold accent */
  --color-bg: #F5F1E8;           /* Cream background */
  --color-text: #2C2C2C;         /* Dark text */
  /* Customize as needed */
}
```

---

## 📊 Analytics Setup

### Umami Analytics

1. **Create a free Umami account** at [umami.is](https://umami.is) or self-host.

2. **Add a website** in your Umami dashboard.

3. **Copy your Website ID** and **Script URL**.

4. **Add to `.env`:**
   ```env
   PUBLIC_UMAMI_WEBSITE_ID=your-website-id
   PUBLIC_UMAMI_SCRIPT_URL=https://analytics.umami.is/script.js
   ```

5. **Tracked Events:**
   - `pageview` — Page loads
   - `section-view` — Section visibility
   - `nav-click` — Navigation clicks
   - `cta-click` — Call-to-action buttons
   - `bible-search` — Bible search queries
   - `bible-nav` — Bible navigation (prev/next, book select)
   - `form-submit` — Form submissions
   - `video-click` — YouTube video plays
   - `map-interaction` — Map clicks, zoom, directions
   - `slider-interaction` — Gallery slider navigation
   - `outbound-link` — External link clicks

6. **View events** in your Umami dashboard under **Events**.

---

## 🔒 Security & Privacy

### Static Hosting Limitations

⚠️ **Important:** GitHub Pages is **static hosting**. Do not expose sensitive API keys or secrets in your frontend code.

- **Safe to expose:** Public API keys, YouTube IDs, Umami Website IDs, Formspree endpoints
- **Never expose:** Private API keys, database credentials, authentication tokens

### Security Features

- **CodeQL Security Scanning** - Automated vulnerability detection
- **Dependabot** - Dependency security updates
- **HTTPS Enforced** - All traffic encrypted
- **Static Site** - Minimal attack surface

See [SECURITY.md](SECURITY.md) for complete security policy.

### Bible API

The default Bible API ([bible-api.com](https://bible-api.com)) is public and free. If you use a paid API requiring a secret key, consider:

- **Serverless proxy** (Cloudflare Workers, Vercel Edge Functions, AWS Lambda)
- **Backend API** to securely handle requests

### Form Submissions

Forms are submitted to **Formspree**, which forwards to your email. No backend database is used.

### Analytics Privacy

**Umami** is privacy-focused:
- No cookies
- No personal data collection
- GDPR compliant
- Open-source

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Astro** | Static site generator |
| **Vanilla JavaScript** | Interactivity (no framework bloat) |
| **Leaflet** | Interactive maps |
| **Lucide Icons** | Modern icon library |
| **Umami** | Privacy-focused analytics |
| **Formspree** | Form handling |
| **Bible API** | Scripture content |
| **YouTube API** | Video embeds |
| **GitHub Actions** | CI/CD deployment |
| **GitHub Pages** | Free static hosting |

---

## 📁 Project Structure

```
Mahanaim-Chirstian-Church/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── assets/
│   │   ├── gallery/            # Gallery images
│   │   ├── team/               # Team photos
│   │   ├── testimonies/        # Testimony images
│   │   └── logo.svg            # Church logo
│   └── robots.txt              # SEO robots file
├── src/
│   ├── scripts/
│   │   ├── analytics.js        # Umami analytics wrapper
│   │   ├── bible.js            # Bible API integration
│   │   ├── map.js              # Leaflet map module
│   │   ├── gallery.js          # Gallery slider
│   │   └── main.js             # Main app logic
│   ├── index.html              # Main page
│   ├── privacy.html            # Privacy policy
│   └── style.css               # Global styles
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies
├── README.md                   # This file
└── tsconfig.json               # TypeScript config
```

---

## 🐛 Troubleshooting

### Build Fails on GitHub Actions

- Check the **Actions** tab for error logs
- Ensure all required secrets are set in repository settings
- Verify `astro.config.mjs` has correct `site` and `base` values

### Images Not Loading

- Ensure images are in `public/assets/` folder
- Use absolute paths starting with `/assets/`
- Check image file names match references in code

### Analytics Not Tracking

- Verify `PUBLIC_UMAMI_WEBSITE_ID` is set correctly
- Check browser console for errors
- Ensure Umami script is loading (check Network tab)
- Ad blockers may block analytics scripts

### Map Not Displaying

- Check browser console for Leaflet errors
- Verify latitude/longitude values are correct
- Ensure internet connection (map tiles load from OpenStreetMap)

### Bible API Not Working

- Default API (bible-api.com) may have rate limits
- Check browser console for fetch errors
- Consider using a different Bible API if needed

---

## 🤝 Contributing

This is a church website project. If you'd like to contribute improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is created for Mahanaim Christian Church. Feel free to use it as a template for your own church website.

---

## 📞 Support

For questions or support:

- **Email:** info@mahanaim.org
- **Phone:** +1 (000) 000-0000
- **GitHub Issues:** [Open an issue](https://github.com/yourusername/Mahanaim-Chirstian-Church/issues)

---

## 🙏 Acknowledgments

Built with faith and purpose for the glory of God.

> *"For where two or three are gathered together in My name, I am there in the midst of them."*  
> — Matthew 18:20 (NKJV)

---

**Made with ❤️ for Mahanaim Christian Church**
