# Commit and Push Guide

**Follow these steps to commit all files and deploy your website.**

---

## 📦 What Needs to Be Committed

The following files have been created/modified and need to be committed:

### Critical Files (Must Commit)
- ✅ `package-lock.json` - **IMPORTANT:** Required for GitHub Actions
- ✅ `.github/workflows/deploy.yml` - Deployment workflow
- ✅ `src/scripts/` - All JavaScript modules (5 files)
- ✅ `src/index.html` - Main page (updated)
- ✅ `src/privacy.html` - Privacy policy
- ✅ `public/assets/` - All assets (logo, images, icons)

### Documentation Files
- ✅ `README.md` - Main documentation
- ✅ `SETUP.md` - Setup guide
- ✅ `CUSTOMIZATION_GUIDE.md` - Non-technical guide
- ✅ `DEPLOYMENT.md` - Deployment guide
- ✅ `PROJECT_SUMMARY.md` - Architecture overview
- ✅ `QUICK_START.md` - Quick start guide
- ✅ `FINAL_CHECKLIST.md` - Pre-launch checklist
- ✅ `COMMIT_AND_PUSH.md` - This file

---

## 🚀 Step-by-Step: Commit and Push

### Step 1: Check Git Status

```bash
git status
```

You should see many new and modified files listed in red.

### Step 2: Add All Files

```bash
git add .
```

This stages all new and modified files for commit.

### Step 3: Verify Files Are Staged

```bash
git status
```

Files should now be listed in green. **Verify that `package-lock.json` is included!**

### Step 4: Commit with Message

```bash
git commit -m "Complete church website implementation with all features"
```

### Step 5: Push to GitHub

If this is your first push:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Mahanaim-Christian-Church.git
git push -u origin main
```

If you've already pushed before:

```bash
git push origin main
```

---

## ✅ Verify Deployment

### Step 1: Check GitHub Actions

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see a workflow running: "Deploy to GitHub Pages"
4. Click on it to watch progress

### Step 2: Wait for Completion

- ⏳ Workflow typically takes 2-5 minutes
- ✅ Green checkmark = Success!
- ❌ Red X = Failed (check error logs)

### Step 3: Access Your Site

Once deployment succeeds, your site will be live at:

```
https://YOUR_USERNAME.github.io/Mahanaim-Christian-Church/
```

---

## 🐛 Troubleshooting

### "package-lock.json not found" Error

**Solution:** Ensure package-lock.json is committed:

```bash
# Check if file exists
ls -la package-lock.json

# If it exists but wasn't added
git add package-lock.json
git commit -m "Add package-lock.json"
git push origin main
```

### "Permission denied" Error

**Solution:** Set workflow permissions:

1. Go to repository **Settings**
2. Click **Actions** → **General**
3. Under "Workflow permissions", select **Read and write permissions**
4. Click **Save**
5. Re-run the workflow

### Build Fails

**Solution:** Check the Actions tab for specific error messages.

Common issues:
- Missing `package-lock.json` (see above)
- Wrong `astro.config.mjs` settings
- Missing GitHub Secrets (optional, but recommended)

### Site Shows 404

**Solution:** 

1. Wait 5-10 minutes (first deployment takes longer)
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Verify GitHub Pages is enabled (Settings → Pages → GitHub Actions)
4. Check `astro.config.mjs` has correct `base` path

---

## 📋 Pre-Push Checklist

Before pushing, verify:

- [ ] `package-lock.json` exists in root directory
- [ ] All new files are staged (`git status` shows green)
- [ ] `astro.config.mjs` has your GitHub username
- [ ] `.gitignore` does NOT include `package-lock.json`
- [ ] No sensitive data (passwords, API keys) in committed files

---

## 🔄 Making Updates After Initial Push

For future updates:

```bash
# 1. Make your changes to files

# 2. Stage changes
git add .

# 3. Commit with descriptive message
git commit -m "Update team photos and event information"

# 4. Push to GitHub
git push origin main

# 5. Wait 2-3 minutes for automatic redeployment
```

---

## 📊 What Happens After Push

1. **GitHub receives your code**
2. **GitHub Actions triggers** (automatically)
3. **Workflow runs:**
   - Checks out code
   - Sets up Node.js
   - Installs dependencies (`npm ci` - requires package-lock.json)
   - Builds site (`npm run build`)
   - Deploys to GitHub Pages
4. **Site updates** (2-5 minutes)
5. **You're live!** ✅

---

## 🎯 Quick Commands Reference

```bash
# Check status
git status

# Add all files
git add .

# Add specific file
git add package-lock.json

# Commit
git commit -m "Your message here"

# Push
git push origin main

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes (CAREFUL!)
git reset --hard HEAD
```

---

## 🆘 Emergency: Rollback

If something breaks after pushing:

```bash
# Revert last commit
git revert HEAD
git push origin main
```

Or restore to a specific commit:

```bash
# Find commit hash
git log --oneline

# Reset to that commit
git reset --hard COMMIT_HASH
git push --force origin main
```

⚠️ **Warning:** `--force` overwrites history. Use carefully.

---

## ✅ Success Indicators

You'll know deployment succeeded when:

- ✅ Actions tab shows green checkmark
- ✅ Site loads at GitHub Pages URL
- ✅ No 404 errors
- ✅ Images load correctly
- ✅ Navigation works
- ✅ Forms are functional

---

## 📞 Need Help?

**If deployment fails:**
1. Check Actions tab for error message
2. Read error carefully
3. Search error message in GitHub Issues
4. Open a new issue with error details

**Common resources:**
- GitHub Actions Docs: [docs.github.com/actions](https://docs.github.com/actions)
- GitHub Pages Docs: [docs.github.com/pages](https://docs.github.com/pages)
- Astro Docs: [docs.astro.build](https://docs.astro.build)

---

## 🎉 After Successful Deployment

Once your site is live:

1. **Test everything:**
   - Click all navigation links
   - Test forms
   - Check mobile responsiveness
   - Verify images load

2. **Share with team:**
   - Send URL to church staff
   - Gather feedback
   - Make improvements

3. **Customize content:**
   - Follow CUSTOMIZATION_GUIDE.md
   - Replace placeholder images
   - Update text content

4. **Set up analytics:**
   - Create Umami account
   - Add Website ID to GitHub Secrets
   - Monitor visitor engagement

---

**Ready to deploy? Run these commands:**

```bash
git add .
git commit -m "Complete church website - ready for launch"
git push origin main
```

Then watch the magic happen in the Actions tab! 🚀

---

**Last Updated:** January 2025
