# Deployment Guide

Complete guide to deploying Mahanaim Christian Church website to GitHub Pages.

---

## 🚀 Initial Deployment Setup

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `Mahanaim-Christian-Church` (or your preferred name)
4. Set to **Public** (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Mahanaim Christian Church website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/Mahanaim-Christian-Church.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 4: Configure Repository Settings

1. Still in Settings, go to **Actions** → **General**
2. Under "Workflow permissions", select:
   - ✅ **Read and write permissions**
3. Click **Save**

### Step 5: Add Environment Variables (Secrets)

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add each of these secrets:

| Secret Name | Example Value | Required? |
|-------------|---------------|-----------|
| `PUBLIC_SITE_URL` | `https://yourusername.github.io/Mahanaim-Christian-Church` | ✅ Yes |
| `PUBLIC_UMAMI_WEBSITE_ID` | `abc123-def456-ghi789` | ⚠️ Recommended |
| `PUBLIC_YOUTUBE_PLAYLIST_ID` | `PLxxxxxxxxxxxxxxxxxxxxxx` | ⚠️ Recommended |
| `PUBLIC_CHURCH_LAT` | `40.7128` | ⚠️ Recommended |
| `PUBLIC_CHURCH_LNG` | `-74.0060` | ⚠️ Recommended |
| `PUBLIC_CHURCH_EMAIL` | `info@mahanaim.org` | ⚠️ Recommended |
| `PUBLIC_CHURCH_PHONE` | `+1 (000) 000-0000` | ⚠️ Recommended |
| `PUBLIC_CHURCH_ADDRESS` | `123 Faith Ave, City, State` | ⚠️ Recommended |
| `PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/mnjokoon` | ⚠️ Recommended |
| `PUBLIC_CANONICAL_DOMAIN` | `https://mahanaim.org` | ⬜ Optional |

**Note:** If you don't add secrets, the site will use default placeholder values from `.env.example`.

### Step 6: Update Astro Config

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',  // ← Change this
  base: '/Mahanaim-Christian-Church',        // ← Change if repo name differs
  // ...
});
```

### Step 7: Trigger First Deployment

```bash
# Make a small change (or just recommit)
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

### Step 8: Monitor Deployment

1. Go to **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait 2-5 minutes for completion
4. Green checkmark = success! ✅

### Step 9: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/Mahanaim-Christian-Church/
```

---

## 🌐 Custom Domain Setup (Optional)

### Step 1: Purchase Domain

Buy a domain from:
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://godaddy.com)

### Step 2: Configure DNS

Add these DNS records with your domain provider:

**For apex domain (mahanaim.org):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**For www subdomain:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 3600 |

### Step 3: Add Custom Domain to GitHub

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter: `mahanaim.org`
3. Click **Save**
4. Wait for DNS check (can take up to 24 hours)
5. Once verified, check **Enforce HTTPS**

### Step 4: Create CNAME File

Create `public/CNAME` file:

```
mahanaim.org
```

Commit and push:

```bash
git add public/CNAME
git commit -m "Add custom domain"
git push origin main
```

### Step 5: Update Canonical URL

Add to GitHub Secrets:

```
PUBLIC_CANONICAL_DOMAIN=https://mahanaim.org
```

---

## 🔄 Continuous Deployment

Every time you push to `main` branch, the site automatically rebuilds and deploys.

### Automatic Deployment Triggers:

- ✅ Push to `main` branch
- ✅ Merge pull request to `main`
- ✅ Manual workflow dispatch

### Deployment Process:

1. GitHub Actions detects push
2. Installs dependencies (`npm ci`)
3. Builds site (`npm run build`)
4. Deploys to GitHub Pages
5. Site updates in 2-5 minutes

---

## 🧪 Testing Before Deployment

### Local Testing:

```bash
# Development server
npm run dev
# Open http://localhost:4321

# Production build test
npm run build
npm run preview
# Open http://localhost:4321
```

### Pre-Deployment Checklist:

- [ ] All images load correctly
- [ ] All links work
- [ ] Forms submit successfully
- [ ] Map displays correctly
- [ ] Bible reader works
- [ ] YouTube videos embed
- [ ] Mobile responsive
- [ ] No console errors

---

## 🐛 Troubleshooting Deployment

### Build Fails

**Check Actions tab for errors:**

1. Go to **Actions** tab
2. Click failed workflow
3. Expand failed step
4. Read error message

**Common issues:**

- **Missing dependency:** Run `npm install` locally
- **Syntax error:** Check recent code changes
- **Environment variable:** Verify secrets are set

### Site Not Updating

1. **Clear browser cache:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Check Actions tab:** Ensure deployment succeeded
3. **Wait longer:** Can take up to 10 minutes
4. **Check GitHub Pages settings:** Ensure source is "GitHub Actions"

### 404 Errors

**If site shows 404:**

1. Verify `astro.config.mjs` has correct `base` path
2. Check repository name matches config
3. Ensure GitHub Pages is enabled
4. Wait 5-10 minutes after first deployment

**If assets (images/CSS) show 404:**

1. Verify files are in `public/` folder
2. Check paths start with `/assets/`
3. Ensure file names match exactly (case-sensitive)

### Custom Domain Not Working

1. **DNS propagation:** Can take 24-48 hours
2. **Check DNS:** Use [DNS Checker](https://dnschecker.org)
3. **Verify CNAME file:** Must be in `public/` folder
4. **GitHub verification:** Check Pages settings for green checkmark

---

## 📊 Monitoring Deployment

### GitHub Actions Status Badge

Add to README.md:

```markdown
![Deploy Status](https://github.com/YOUR_USERNAME/Mahanaim-Christian-Church/actions/workflows/deploy.yml/badge.svg)
```

### Deployment History

View all deployments:
1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages"
3. See all workflow runs

---

## 🔐 Security Best Practices

### ✅ DO:

- Use GitHub Secrets for sensitive data
- Keep `.env` in `.gitignore`
- Use HTTPS (enforced by GitHub Pages)
- Regularly update dependencies
- Review Actions logs for issues

### ❌ DON'T:

- Commit API keys or passwords
- Expose private data in frontend code
- Disable HTTPS on custom domain
- Ignore security warnings
- Use outdated dependencies

---

## 🔄 Rollback to Previous Version

If deployment breaks the site:

### Method 1: Revert Last Commit

```bash
git revert HEAD
git push origin main
```

### Method 2: Restore Specific Version

1. Go to **Actions** tab
2. Find last working deployment
3. Note the commit hash
4. Restore:

```bash
git reset --hard COMMIT_HASH
git push --force origin main
```

⚠️ **Warning:** `--force` overwrites history. Use carefully.

---

## 📈 Performance Optimization

### After Deployment:

1. **Test speed:** [PageSpeed Insights](https://pagespeed.web.dev)
2. **Check mobile:** [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
3. **Validate HTML:** [W3C Validator](https://validator.w3.org)
4. **Test SEO:** [Google Search Console](https://search.google.com/search-console)

### Optimization Tips:

- Compress images before uploading
- Use lazy loading (already implemented)
- Minimize custom code additions
- Keep dependencies updated
- Monitor bundle size

---

## 📞 Support

### Resources:

- **GitHub Pages Docs:** [docs.github.com/pages](https://docs.github.com/pages)
- **Astro Docs:** [docs.astro.build](https://docs.astro.build)
- **GitHub Actions:** [docs.github.com/actions](https://docs.github.com/actions)

### Getting Help:

- **GitHub Issues:** Open issue in your repository
- **GitHub Community:** [github.community](https://github.community)
- **Astro Discord:** [astro.build/chat](https://astro.build/chat)

---

**Last Updated:** January 2025
