# Quick Start Guide

**Get your church website live in 10 minutes!**

---

## 🚀 Fast Track Deployment

### Step 1: Push to GitHub (2 minutes)

```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Initial commit: Mahanaim Christian Church website"

# Add your GitHub repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/Mahanaim-Christian-Church.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages (1 minute)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Done! ✅

### Step 3: Configure Permissions (1 minute)

1. Still in Settings, go to **Actions** → **General**
2. Scroll to "Workflow permissions"
3. Select **Read and write permissions**
4. Click **Save**

### Step 4: Update Repository Name (1 minute)

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',  // ← Your GitHub username
  base: '/Mahanaim-Christian-Church',        // ← Your repo name (if different)
  // ...
});
```

Commit and push:

```bash
git add astro.config.mjs
git commit -m "Update site URL"
git push origin main
```

### Step 5: Wait for Deployment (3-5 minutes)

1. Go to **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait for green checkmark ✅
4. Your site is live at: `https://YOUR_USERNAME.github.io/Mahanaim-Christian-Church/`

---

## ⚙️ Optional: Add Configuration (5 minutes)

Add these secrets for full functionality:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these (one at a time):

| Secret Name | Where to Get It | Required? |
|-------------|-----------------|-----------|
| `PUBLIC_UMAMI_WEBSITE_ID` | [umami.is](https://umami.is) → Create account → Add website | Recommended |
| `PUBLIC_YOUTUBE_PLAYLIST_ID` | YouTube playlist URL: `list=PLxxxxxx` | Recommended |
| `PUBLIC_CHURCH_LAT` | Google Maps → Right-click location → Copy coordinates | Recommended |
| `PUBLIC_CHURCH_LNG` | Same as above (second number) | Recommended |
| `PUBLIC_CHURCH_EMAIL` | Your church email | Recommended |
| `PUBLIC_CHURCH_PHONE` | Your church phone | Recommended |
| `PUBLIC_FORMSPREE_ENDPOINT` | [formspree.io](https://formspree.io) → Create form | Recommended |

After adding secrets, push any change to trigger redeployment:

```bash
git commit --allow-empty -m "Update configuration"
git push origin main
```

---

## 📝 First Customizations (10 minutes)

### 1. Replace Logo

1. Add your logo to `public/assets/logo.svg`
2. Commit and push

### 2. Update Church Info

Edit `.env` file (or add as GitHub Secrets):

```env
PUBLIC_CHURCH_EMAIL=info@yourchurch.org
PUBLIC_CHURCH_PHONE=+1 (555) 123-4567
PUBLIC_CHURCH_ADDRESS=123 Your Street, City, State 12345
```

### 3. Add Team Photos

1. Add photos to `public/assets/team/`
2. Edit `src/scripts/main.js` → Find `initTeam()` function
3. Update names, roles, and bios
4. Commit and push

---

## 🆘 Troubleshooting

### Build Fails

**Check Actions tab for errors:**
- Go to **Actions** → Click failed workflow → Read error message

**Common fixes:**
- Ensure `package-lock.json` is committed
- Verify `astro.config.mjs` has correct values
- Check all secrets are added correctly

### Site Shows 404

**Wait 5-10 minutes** after first deployment.

If still 404:
- Verify GitHub Pages is enabled (Settings → Pages)
- Check `astro.config.mjs` has correct `base` path
- Ensure repository is public

### Images Not Loading

- Verify images are in `public/assets/` folder
- Check paths start with `/assets/`
- Ensure file names match exactly (case-sensitive)

---

## 📚 Next Steps

Once your site is live:

1. **Read CUSTOMIZATION_GUIDE.md** - Learn how to update content
2. **Read SETUP.md** - Detailed customization options
3. **Read DEPLOYMENT.md** - Advanced deployment topics
4. **Set up analytics** - Track visitor engagement
5. **Add real content** - Replace placeholder text and images
6. **Test on mobile** - Ensure responsive design works
7. **Share with congregation** - Announce your new website!

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Workflow permissions set
- [ ] `astro.config.mjs` updated with your username
- [ ] First deployment successful (green checkmark)
- [ ] Site accessible at GitHub Pages URL
- [ ] Secrets added (optional but recommended)
- [ ] Logo replaced
- [ ] Church info updated
- [ ] Team photos added
- [ ] Content customized

---

## 🎉 You're Live!

Your church website is now live and accessible to the world!

**Share your site:**
- `https://YOUR_USERNAME.github.io/Mahanaim-Christian-Church/`

**Next:** Customize content, add photos, and make it your own!

---

**Need help?** See README.md for full documentation or open a GitHub issue.

**Last Updated:** January 2025
