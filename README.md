# Bloqz Technologies Website

Official website for Bloqz Technologies - Industry-leading blockchain solutions.

## Domain
- **Production**: https://bloqz.tech
- **Staging**: Vercel preview deployments

## Project Structure

This is a separated version of the Bloqz Technologies website that excludes all RxBridge-specific functionality. It contains only the marketing website and blockchain systems information.

### Included Systems
- CannaLink - Cannabis Compliance & Supply Chain
- VaultNet - Finance & Banking Operations  
- MetaEstate - Real Estate & Property Records
- GridFlux - Energy & Utilities Management
- ShopChain - Retail & Inventory Management
- DineSync - Restaurant Supply & Operations
- FreightFlow - Supply Chain & Logistics
- CivicCore - Government & Public Services
- PolicyNet - Insurance & Claims Processing
- SignalMesh - Telecommunications Infrastructure
- LearnLedger - Education & Credentials
- TrackPort - Logistics & Customs Data
- ArrowChain - Unified Multi-Industry Platform

### Excluded from this build
- RxBridge healthcare portals
- Patient/Doctor/Pharmacy/Insurance portal functionality
- Database connections and backend services
- Mobile app configurations

## Deployment Instructions

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd bloqz-web
   vercel --prod
   ```

4. **Configure Custom Domain**:
   - In Vercel dashboard, go to your project
   - Navigate to Settings > Domains
   - Add `bloqz.tech` as your custom domain
   - Update DNS records as instructed by Vercel

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Features

- ✅ Responsive design for all devices
- ✅ Dark/light mode support
- ✅ Industry-specific theme switching
- ✅ Performance optimized
- ✅ SEO optimized
- ✅ Accessibility compliant
- ✅ Professional blockchain system showcases
- ✅ Compliance and security documentation
- ✅ Corporate information pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)