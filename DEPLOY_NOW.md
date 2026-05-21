# 🚀 DEPLOY TO YOUR REPOSITORY

**Repository:** https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church

---

## ✅ Configuration Complete

All files have been updated with your actual GitHub organization:
- ✅ `astro.config.mjs` - Site URL configured
- ✅ `.env.example` - URLs updated
- ✅ `robots.txt` - Sitemap URL configured
- ✅ `public/sitemap.xml` - URLs updated

---

## 🚀 DEPLOY NOW (3 Steps)

### Step 1: Commit All Files

```bash
git add .
git commit -m "Complete Mahanaim Christian Church website - production ready"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to: https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/settings/pages
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

### Step 3: Set Workflow Permissions

1. Go to: https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/settings/actions
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Click **Save**

---

## 🎉 Your Site Will Be Live At:

```
https://mahanaim-christian-church.github.io/Mahanaim-Chirstian-Church/
```

**Deployment time:** 3-5 minutes after pushing to GitHub

---

## 📊 Monitor Deployment

Watch the deployment progress:
1. Go to: https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/actions
2. Click on the latest workflow run
3. Wait for green checkmark ✅

---

## 🔐 Add GitHub Secrets (Recommended)

After deployment, add these secrets for full functionality:

1. Go to: https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/settings/secrets/actions
2. Click **New repository secret**
3. Add these one by one:

| Secret Name | Example Value | Purpose |
|-------------|---------------|---------|
| `PUBLIC_UMAMI_WEBSITE_ID` | `abc123-def456` | Analytics tracking |
| `PUBLIC_YOUTUBE_PLAYLIST_ID` | `PLxxxxxxxxxxxxxx` | Sermon videos |
| `PUBLIC_CHURCH_LAT` | `40.7128` | Map location |
| `PUBLIC_CHURCH_LNG` | `-74.0060` | Map location |
| `PUBLIC_CHURCH_EMAIL` | `info@mahanaim.org` | Contact email |
| `PUBLIC_CHURCH_PHONE` | `+1 (555) 123-4567` | Contact phone |
| `PUBLIC_CHURCH_ADDRESS` | `123 Faith Ave, City, State` | Physical address |
| `PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/xxxxx` | Form submissions |

---

## 🌐 Custom Domain (Optional)

If you want to use **mahanaim.org** instead of the GitHub URL:

### Step 1: Add CNAME File

Already done! The file `public/CNAME` will be created with:
```
mahanaim.org
```

### Step 2: Configure DNS

Add these records with your domain provider:

**A Records (for mahanaim.org):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record (for www.mahanaim.org):**
```
mahanaim-christian-church.github.io
```

### Step 3: Enable in GitHub

1. Go to: https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/settings/pages
2. Under **Custom domain**, enter: `mahanaim.org`
3. Click **Save**
4. Wait for DNS check (24-48 hours)
5. Enable **Enforce HTTPS**

---

## ✅ Pre-Deployment Checklist

- [x] All files created and configured
- [x] Build tested successfully
- [x] GitHub organization URL configured
- [x] Security scanning enabled (CodeQL)
- [x] Documentation complete
- [ ] Files committed to Git
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Workflow permissions set

---

## 🆘 If Something Goes Wrong

### Build Fails
- Check: https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/actions
- Look for error message in workflow logs
- Most common: Workflow permissions not set

### Site Shows 404
- Wait 10 minutes (first deployment takes longer)
- Clear browser cache (Ctrl+Shift+R)
- Verify GitHub Pages is enabled
- Check Actions tab for successful deployment

### Images Don't Load
- Verify images are in `public/assets/` folder
- Check paths start with `/assets/`
- Wait a few minutes for CDN to update

---

## 📚 Next Steps After Deployment

1. **Test the site:**
   - Visit: https://mahanaim-christian-church.github.io/Mahanaim-Chirstian-Church/
   - Test all features
   - Check mobile responsiveness

2. **Customize content:**
   - Follow `CUSTOMIZATION_GUIDE.md`
   - Replace placeholder images
   - Update team information
   - Add real testimonies

3. **Set up analytics:**
   - Create Umami account
   - Add Website ID to GitHub Secrets
   - Monitor visitor engagement

4. **Configure forms:**
   - Create Formspree account
   - Add endpoint to GitHub Secrets
   - Test form submissions

---

## 🎉 Ready to Launch!

Your church website is complete and ready to serve the Mahanaim Christian Church community!

**Deploy command:**
```bash
git add .
git commit -m "Complete Mahanaim Christian Church website"
git push origin main
```

Then enable GitHub Pages and you're live! 🚀

---

**Site URL:** https://mahanaim-christian-church.github.io/Mahanaim-Chirstian-Church/  
**Repository:** https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church  
**Status:** ✅ Ready to Deploy

---

**Last Updated:** January 2025
