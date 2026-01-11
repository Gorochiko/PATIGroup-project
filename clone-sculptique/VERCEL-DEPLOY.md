# Deploy to Vercel via Website (No CLI Required)

## 📋 Prerequisites

1. GitHub account
2. Vercel account (free) - sign up at https://vercel.com

---

## 🚀 Step-by-Step Guide

### Step 1: Prepare Your Project

```bash
# Build Tailwind CSS
npm run build
```

### Step 2: Push to GitHub

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel Website

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Project**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your repository from the list
   - Click "Import"

3. **Configure Project**
   
   **Framework Preset:** Other
   
   **Build and Output Settings:**
   - Build Command: `npm run build`
   - Output Directory: `.` (leave as root)
   - Install Command: `npm install`
   
   **Root Directory:** `./` (leave as is)

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Done! 🎉

### Step 4: View Your Site

After deployment completes:
- Click "Visit" to see your live site
- Your URL will be: `https://your-project-name.vercel.app`

---

## 🔧 Alternative: Deploy Without GitHub

If you don't want to use GitHub:

### Method 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### Method 2: Drag & Drop (No Git Required)

1. Go to https://vercel.com/new
2. Click "Browse" or drag your project folder
3. Configure settings (same as above)
4. Click "Deploy"

---

## ⚙️ Configuration File (Optional)

Create `vercel.json` in your project root for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".",
  "installCommand": "npm install",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🎯 Post-Deployment

### Add Custom Domain (Optional)

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your domain
4. Update DNS records as instructed

### Environment Variables (If needed)

1. Go to "Settings" → "Environment Variables"
2. Add any required variables
3. Redeploy

---

## 🔄 Auto-Deploy on Git Push

Once connected to GitHub:
- Every push to `main` branch auto-deploys
- Pull requests get preview deployments
- No manual deployment needed!

---

## 🐛 Troubleshooting

### Build fails?
**Check:**
- `package.json` has correct scripts
- `npm run build` works locally
- All dependencies are in `package.json`

### CSS not loading?
**Solution:**
- Ensure `dist/output.css` is committed to Git
- Check `dist/` is NOT in `.gitignore`

### Images not showing?
**Solution:**
- Use absolute URLs for external images
- Ensure relative paths are correct

---

## ✅ Success Checklist

After deployment, verify:

- [ ] Site loads at Vercel URL
- [ ] All images display
- [ ] Video carousel works
- [ ] FAQ accordion functions
- [ ] Pricing options work
- [ ] Mobile responsive
- [ ] All links work

---

## 📊 Your Deployment URLs

After deployment, you'll get:

- **Production:** `https://your-project.vercel.app`
- **Preview (PRs):** `https://your-project-git-branch.vercel.app`
- **Custom Domain:** `https://yourdomain.com` (if configured)

---

## 🎉 You're Live!

Your site is now deployed on Vercel with:
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Preview deployments
- ✅ Analytics (optional)

**Need help?** Check [Vercel Documentation](https://vercel.com/docs)
