# Deployment Guide for bloqz.tech

## Quick Deployment Steps

### Option 1: Direct Vercel Deployment
1. **Push to GitHub** (recommended):
   ```bash
   git init
   git add .
   git commit -m "Initial Bloqz Technologies website"
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com/dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Set build settings:
     - Framework: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Deploy

3. **Configure Custom Domain**:
   - In Vercel project settings
   - Go to Domains tab
   - Add `bloqz.tech`
   - Update your domain's DNS records as instructed

### Option 2: CLI Deployment
If you have Vercel CLI installed:
```bash
cd bloqz-web
vercel login
vercel --prod
```

## DNS Configuration
Point your domain `bloqz.tech` to Vercel:
- Type: CNAME
- Name: @
- Value: cname.vercel-dns.com

## Build Verification
Test locally before deployment:
```bash
npm run build
npm run preview
```

## Production Environment
- Domain: https://bloqz.tech
- CDN: Vercel Global Edge Network
- SSL: Automatic via Vercel

## Project Features
- Static site generation
- Optimized for performance
- Mobile responsive
- SEO optimized
- Dark/light mode support