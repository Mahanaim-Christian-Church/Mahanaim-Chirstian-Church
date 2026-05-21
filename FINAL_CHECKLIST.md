# Pre-Launch Checklist

**Complete this checklist before launching your church website.**

---

## 📋 Essential Configuration

### Repository Setup
- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] Repository is **Public** (required for free GitHub Pages)
- [ ] `package-lock.json` is committed (not in .gitignore)

### GitHub Pages
- [ ] GitHub Pages enabled (Settings → Pages → GitHub Actions)
- [ ] Workflow permissions set to "Read and write" (Settings → Actions → General)
- [ ] First deployment successful (Actions tab shows green checkmark)
- [ ] Site accessible at `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Configuration Files
- [ ] `astro.config.mjs` updated with your GitHub username
- [ ] `astro.config.mjs` has correct repository name in `base` field
- [ ] `.env.example` reviewed (optional: create `.env` for local development)

---

## 🔐 GitHub Secrets (Recommended)

Add these in Settings → Secrets and variables → Actions:

### Required for Full Functionality
- [ ] `PUBLIC_SITE_URL` - Your GitHub Pages URL
- [ ] `PUBLIC_CHURCH_LAT` - Church latitude (from Google Maps)
- [ ] `PUBLIC_CHURCH_LNG` - Church longitude (from Google Maps)
- [ ] `PUBLIC_CHURCH_EMAIL` - Church email address
- [ ] `PUBLIC_CHURCH_PHONE` - Church phone number
- [ ] `PUBLIC_CHURCH_ADDRESS` - Church physical address

### Recommended
- [ ] `PUBLIC_UMAMI_WEBSITE_ID` - Analytics tracking ID
- [ ] `PUBLIC_YOUTUBE_PLAYLIST_ID` - YouTube playlist for sermons
- [ ] `PUBLIC_FORMSPREE_ENDPOINT` - Form submission endpoint

### Optional
- [ ] `PUBLIC_CANONICAL_DOMAIN` - Custom domain (if using)
- [ ] `PUBLIC_YOUTUBE_CHANNEL_URL` - YouTube channel URL
- [ ] `PUBLIC_UMAMI_SCRIPT_URL` - Umami script URL (if self-hosted)

---

## 🎨 Content Customization

### Branding
- [ ] Church logo replaced in `public/assets/logo.svg`
- [ ] OG image updated in `public/assets/og-image.jpg` (for social media)
- [ ] Apple touch icon updated in `public/assets/apple-touch-icon.png`
- [ ] Favicon displays correctly in browser tab

### Leadership Team
- [ ] Team photos added to `public/assets/team/`
- [ ] Team member names updated in `src/scripts/main.js`
- [ ] Team member roles updated
- [ ] Team member bios written
- [ ] Team member contact emails added

### Testimonies
- [ ] Testimony photos added to `public/assets/testimonies/`
- [ ] Testimony titles written in `src/scripts/main.js`
- [ ] Testimony summaries written
- [ ] Testimony authors added

### Events
- [ ] Current events added in `src/scripts/main.js`
- [ ] Event dates updated
- [ ] Event times and locations correct
- [ ] Event descriptions written

### Gallery
- [ ] Ministry photos added to `public/assets/gallery/`
- [ ] Gallery items updated in `src/scripts/gallery.js`
- [ ] Image descriptions (alt text) added
- [ ] Videos embedded (if any)

### Map Locations
- [ ] Church coordinates verified in `src/scripts/map.js`
- [ ] Location names updated
- [ ] Location addresses correct
- [ ] Location descriptions written
- [ ] Location photos added
- [ ] Google Maps directions URLs updated

### Media/Sermons
- [ ] YouTube playlist ID added (if using playlist)
- [ ] Individual video IDs added in `src/scripts/main.js` (if not using playlist)
- [ ] Video titles updated
- [ ] YouTube channel URL correct

### FAQ
- [ ] FAQ questions reviewed in `src/scripts/main.js`
- [ ] FAQ answers customized for your church
- [ ] Additional questions added (if needed)

### Footer
- [ ] Service times updated in `src/index.html` footer
- [ ] Contact information correct
- [ ] Social media links updated (YouTube, Facebook, Instagram)
- [ ] Privacy policy link works

---

## 🔍 SEO & Metadata

### Meta Tags
- [ ] Page title updated in `src/index.html` (if needed)
- [ ] Meta description reviewed
- [ ] Keywords relevant to your church
- [ ] Canonical URL set (if using custom domain)

### Open Graph
- [ ] OG title correct
- [ ] OG description compelling
- [ ] OG image uploaded and referenced
- [ ] OG URL matches your domain

### Schema.org
- [ ] Church name correct in JSON-LD
- [ ] Church address updated
- [ ] Church phone and email correct
- [ ] Church coordinates match actual location
- [ ] Service times accurate
- [ ] Social media URLs correct

### Robots & Sitemap
- [ ] `public/robots.txt` has correct sitemap URL
- [ ] Sitemap generates automatically (Astro handles this)

---

## 📊 Analytics Setup

### Umami Analytics
- [ ] Umami account created at [umami.is](https://umami.is)
- [ ] Website added in Umami dashboard
- [ ] Website ID copied
- [ ] Website ID added as GitHub Secret
- [ ] Analytics script loading (check browser Network tab)
- [ ] Test event tracked (click a button, check Umami dashboard)

### Event Tracking
- [ ] Page views tracking
- [ ] CTA button clicks tracking
- [ ] Form submissions tracking
- [ ] Bible reader interactions tracking
- [ ] Map interactions tracking
- [ ] Video plays tracking

---

## 📧 Forms & Integrations

### Formspree
- [ ] Formspree account created at [formspree.io](https://formspree.io)
- [ ] Form created in Formspree dashboard
- [ ] Form endpoint copied
- [ ] Endpoint added as GitHub Secret
- [ ] Test form submission successful
- [ ] Email received from test submission

### YouTube
- [ ] YouTube channel exists
- [ ] Playlist created (if using playlist)
- [ ] Playlist ID copied from URL
- [ ] Videos uploaded and public
- [ ] Video embeds working on site

---

## 🧪 Testing

### Functional Testing
- [ ] All navigation links work
- [ ] Sidebar opens/closes on mobile
- [ ] Bible reader loads scripture
- [ ] Bible search works
- [ ] Bible navigation (prev/next) works
- [ ] Map displays with markers
- [ ] Map popups open on marker click
- [ ] Gallery slider advances
- [ ] Gallery dots navigation works
- [ ] FAQ accordion expands/collapses
- [ ] Form validates required fields
- [ ] Form submits successfully
- [ ] YouTube videos play

### Cross-Browser Testing
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iOS)

### Responsive Testing
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)
- [ ] Large desktop (1920px+)

### Accessibility Testing
- [ ] Keyboard navigation works (Tab key)
- [ ] Focus indicators visible
- [ ] Screen reader compatible (test with NVDA/JAWS)
- [ ] Color contrast sufficient (use WebAIM checker)
- [ ] Images have alt text
- [ ] Forms have labels

### Performance Testing
- [ ] Lighthouse score 90+ (all categories)
- [ ] Images lazy load
- [ ] No console errors
- [ ] Page load under 3 seconds
- [ ] Mobile performance good

---

## 🌐 Custom Domain (Optional)

If using a custom domain:

- [ ] Domain purchased
- [ ] DNS A records added (4 GitHub IPs)
- [ ] DNS CNAME record added (www subdomain)
- [ ] `public/CNAME` file created with domain
- [ ] Custom domain added in GitHub Pages settings
- [ ] DNS propagation complete (24-48 hours)
- [ ] HTTPS enforced in GitHub Pages settings
- [ ] Canonical URL updated to custom domain

---

## 📱 Social Media

- [ ] Website announced on church social media
- [ ] OG image displays correctly when shared
- [ ] Twitter card displays correctly
- [ ] Facebook preview looks good
- [ ] Instagram bio link updated

---

## 📚 Documentation

- [ ] README.md reviewed
- [ ] QUICK_START.md completed
- [ ] CUSTOMIZATION_GUIDE.md bookmarked for staff
- [ ] DEPLOYMENT.md reviewed
- [ ] SETUP.md available for reference

---

## 🔒 Security

- [ ] No passwords or API keys committed to repository
- [ ] `.env` file in `.gitignore`
- [ ] GitHub Secrets used for sensitive data
- [ ] HTTPS enforced
- [ ] No security warnings in browser console

---

## 🎉 Launch Day

- [ ] Final content review
- [ ] All placeholder text replaced
- [ ] All placeholder images replaced
- [ ] Contact information verified
- [ ] Service times accurate
- [ ] Event dates current
- [ ] Social media links work
- [ ] Privacy policy reviewed
- [ ] Analytics tracking confirmed
- [ ] Forms tested and working
- [ ] Mobile experience tested
- [ ] Announcement prepared
- [ ] Congregation notified
- [ ] Website URL shared

---

## 📈 Post-Launch

### Week 1
- [ ] Monitor analytics for traffic
- [ ] Check form submissions
- [ ] Review any error reports
- [ ] Gather feedback from congregation
- [ ] Fix any reported issues

### Month 1
- [ ] Update events regularly
- [ ] Add new sermon videos
- [ ] Review analytics insights
- [ ] Add new testimonies
- [ ] Update gallery with recent photos

### Ongoing
- [ ] Monthly content updates
- [ ] Quarterly design review
- [ ] Annual comprehensive review
- [ ] Keep dependencies updated
- [ ] Monitor site performance

---

## ✅ Final Sign-Off

**Reviewed by:** ___________________________  
**Date:** ___________________________  
**Launch Date:** ___________________________  
**Site URL:** ___________________________  

---

## 🆘 Emergency Contacts

**Technical Issues:**
- GitHub Issues: [Open an issue](https://github.com/yourusername/Mahanaim-Christian-Church/issues)
- Email: info@mahanaim.org

**Hosting Issues:**
- GitHub Support: [support.github.com](https://support.github.com)

**Analytics Issues:**
- Umami Docs: [umami.is/docs](https://umami.is/docs)

**Form Issues:**
- Formspree Support: [formspree.io/help](https://formspree.io/help)

---

**Last Updated:** January 2025

**Status:** Ready for Launch ✅
