# ⚠️ ENABLE GITHUB PAGES FIRST

## Error Explanation

The deployment is failing because **GitHub Pages is not enabled** in your repository settings.

**Error:** `Failed to create deployment (status: 404)`  
**Cause:** GitHub Pages must be enabled before the workflow can deploy

---

## ✅ FIX: Enable GitHub Pages (2 Minutes)

### Step 1: Go to Pages Settings

Click this link:
```
https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/settings/pages
```

Or manually:
1. Go to your repository
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)

### Step 2: Configure Source

Under **Build and deployment**:
1. **Source:** Select **GitHub Actions** (from dropdown)
2. Click **Save** (if button appears)

**Important:** Do NOT select "Deploy from a branch" - select "GitHub Actions"

### Step 3: Set Workflow Permissions

Click this link:
```
https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/settings/actions
```

Or manually:
1. Still in **Settings**
2. Click **Actions** → **General** (left sidebar)
3. Scroll to **Workflow permissions**
4. Select **Read and write permissions**
5. Check **Allow GitHub Actions to create and approve pull requests**
6. Click **Save**

### Step 4: Re-run the Workflow

1. Go to: https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/actions
2. Click on the failed workflow run
3. Click **Re-run all jobs** (top right)

---

## 🎯 What Should Happen

After enabling GitHub Pages:
1. ✅ Workflow runs successfully
2. ✅ Site builds without errors
3. ✅ Deployment completes
4. ✅ Site is live at: `https://mahanaim-christian-church.github.io/Mahanaim-Chirstian-Church/`

**Time:** 3-5 minutes

---

## 📸 Visual Guide

### Pages Settings Should Look Like:

```
Build and deployment
├── Source: GitHub Actions ✅
└── (No branch selection needed)
```

### Workflow Permissions Should Look Like:

```
Workflow permissions
├── ○ Read repository contents and packages permissions
├── ● Read and write permissions ✅
└── ☑ Allow GitHub Actions to create and approve pull requests ✅
```

---

## 🔍 Verify Settings

### Check Pages is Enabled:
1. Go to: https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/settings/pages
2. You should see: **"Your site is ready to be published at..."**

### Check Permissions:
1. Go to: https://github.com/Mahanaim-Christian-Church/Mahanaim-Chirstian-Church/settings/actions
2. Verify: **"Read and write permissions"** is selected

---

## 🚀 After Enabling

Once GitHub Pages is enabled:

1. **Automatic deployment:** Every push to `main` triggers deployment
2. **No manual steps:** Just push code and it deploys
3. **View progress:** Check Actions tab for deployment status

---

## 🆘 Still Having Issues?

### Issue: Can't find Pages settings
**Solution:** You need admin access to the repository

### Issue: GitHub Actions not in dropdown
**Solution:** 
1. Make sure repository is public (or you have GitHub Pro/Team)
2. Refresh the page
3. Try a different browser

### Issue: Permissions not saving
**Solution:**
1. Make sure you're an admin
2. Check organization settings don't restrict Actions
3. Contact repository owner

---

## 📋 Quick Checklist

Before re-running workflow:
- [ ] GitHub Pages enabled (Source: GitHub Actions)
- [ ] Workflow permissions set (Read and write)
- [ ] Repository is public (or has GitHub Pro/Team)
- [ ] You have admin access

---

## 🎉 Once Enabled

Your site will be live at:
```
https://mahanaim-christian-church.github.io/Mahanaim-Chirstian-Church/
```

You can then:
- ✅ View your live website
- ✅ Share the URL
- ✅ Make updates (auto-deploy on push)
- ✅ Add custom domain (optional)

---

## 📞 Need Help?

**GitHub Pages Docs:** https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

**GitHub Actions Docs:** https://docs.github.com/en/actions

---

**Next Step:** Enable GitHub Pages using the links above, then re-run the workflow! 🚀

---

**Last Updated:** January 2025
