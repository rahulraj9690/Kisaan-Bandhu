# Vercel Deployment Guide for Kisaan Bandhu

## Project Structure

```
kisaan-bandhu/
├── frontend/              # Static HTML/CSS/JS frontend
│   ├── index.html
│   ├── hire.html
│   ├── jobs.html
│   ├── labours.html
│   ├── machines.html
│   ├── login.html
│   ├── locations.html
│   ├── config.js          # API configuration
│   ├── css/
│   │   ├── style.css
│   │   ├── machines.css
│   │   └── js/
│   │       └── script.js
│   └── images/
├── backend/               # Express.js API server
│   ├── server.js          # Main app (exports Express app)
│   ├── package.json
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── prisma/            # Prisma schema
├── api/                   # Vercel serverless functions
│   ├── index.js           # Express handler
│   └── app.js             # Express app configuration
├── prisma/                # Prisma configuration
│   └── schema.prisma
├── vercel.json            # Vercel configuration
├── .env.example           # Environment variables template
├── .env                   # .gitignored environment file
└── package.json           # Root package.json

```

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ installed
- MongoDB connection string (local or Atlas)
- Vercel account

### 2. Local Development

```bash
# Install dependencies
npm run install-all

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB connection
# MONGODB_URI=mongodb://127.0.0.1:27017/kisaanbandhu

# Run backend locally
npm run dev

# Open frontend in browser
# Navigate to http://localhost:5000
```

### 3. Environment Variables for Vercel

Set these in your Vercel project settings:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kisaanbandhu
NODE_ENV=production
```

### 4. Deploy to Vercel

```bash
# Login to Vercel
npm install -g vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### 5. Fix FUNCTION_INVOCATION_FAILED Error

This error is fixed by:

1. ✅ Creating `/api/index.js` with proper Express handler
2. ✅ Creating  `/api/app.js` with Express app configuration
3. ✅ Using environment variables for MongoDB connection
4. ✅ Exporting Express app as default module
5. ✅ Proper CORS configuration
6. ✅ Adding `vercel.json` with function configuration

### 6. API Routes

All API routes are under `/api`:

- `GET /api/health` - Health check
- `GET /api/` - API info
- `POST /api/labour/add` - Add labour request
- `POST /api/jobs/add` - Add job posting
- `POST /api/machines/add` - Add machine listing
- `POST /api/users/add` - Add user

### 7. Frontend API Configuration

The frontend has automatic API endpoint detection in `config.js`:

- **Local Development**: Uses `http://localhost:5000`
- **Production (Vercel)**: Uses `/api` (relative to current domain)

JavaScript files use `API_CONFIG` object:

```javascript
const apiUrl = API_CONFIG.getFullUrl(API_CONFIG.endpoints.labour + "/add");

fetch(apiUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
```

### 8. Database Setup

#### Option A: MongoDB Atlas (Recommended for Production)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Add to Vercel environment variables as `MONGODB_URI`

#### Option B: Local MongoDB (Development Only)

1. Install MongoDB locally
2. Start MongoDB service
3. Use `mongodb://127.0.0.1:27017/kisaanbandhu` in `.env`

### 9. Troubleshooting

**FUNCTION_INVOCATION_FAILED**
- Check `/api/index.js` is properly exporting the handler
- Verify environment variables are set in Vercel dashboard
- Check MongoDB connection string is correct
- Check logs: `vercel logs <deployment-urls>`

**Blank Page**
- Check browser console for API errors
- Verify `config.js` is loaded
- Check that script tags include `config.js` before `script.js`

**API 404 Errors**
- Ensure route files in `backend/routes/` have proper exports
- Check that API routes are registered in `/api/app.js`

**MongoDB Connection Failed**
- Verify `MONGODB_URI` environment variable
- Check network access in MongoDB Atlas (whitelist Vercel IPs)
- Test connection locally first

### 10. File Structure Summary

**Files Changed for Vercel Deployment:**

- **New:** `/vercel.json` - Vercel configuration
- **New:** `/api/index.js` - Serverless handler
- **New:** `/api/app.js` - Express app setup
- **New:** `/frontend/config.js` - API configuration
- **New:** `/.env.example` - Environment template
- **Updated:** `/backend/server.js` - Use environment variables
- **Updated:** `/backend/package.json` - Add dotenv dependency
- **Updated:** `/package.json` - Root monorepo config
- **Updated:** `/frontend/index.html` - Add config.js reference
- **Updated:** `/frontend/hire.html` - Use API_CONFIG for fetch
- **Updated:** `/frontend/css/js/script.js` - Use API_CONFIG for fetch

### 11. Next Steps

1. Implement proper route handlers in `backend/routes/*.js`
2. Add database models in `backend/models/`
3. Set up Prisma migrations
4. Add authentication/authorization
5. Add input validation
6. Add error handling middleware
7. Set up monitoring and logging

