# Bloqz Web App - VSCode Setup Guide

## Quick Start

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

3. **Access Application**
- Frontend: http://localhost:5000
- Backend API: http://localhost:5000/api

## Project Structure

```
bloqz-web-complete/
├── client/src/           # React frontend
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components (Bloqz, RxBridge, etc.)
│   └── contexts/        # Theme and state management
├── server/              # Express backend
│   ├── auth-routes.ts   # Authentication endpoints
│   ├── routes.ts        # API endpoints
│   └── db-storage.ts    # Database operations
├── shared/              # Shared TypeScript types
└── migrations/          # Database migrations
```

## Key Features Implemented

- **Complete Bloqz Platform**: Rebranded from ArrowChain
- **Functional Navigation**: Learn More buttons link to system pages
- **Responsive Design**: Dark/light themes with mobile support
- **Blockchain Systems**: 13 individual blockchain platforms
- **Enterprise Ready**: Professional presentation without placeholder content

## Environment Setup

Create `.env` file:
```
DATABASE_URL=your_postgresql_url
NODE_ENV=development
```

## VSCode Extensions Recommended

- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- Auto Rename Tag

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run db:push      # Push database schema changes
npm run db:studio    # Open Drizzle Studio
```

## Database Setup

The app uses PostgreSQL with Drizzle ORM. Run migrations:
```bash
npm run db:push
```

## Deployment Ready

All files are configured for production deployment to platforms like Vercel, Netlify, or your own servers.