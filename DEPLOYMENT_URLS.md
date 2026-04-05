# Deploy Kisaan Bandhu to Vercel & Render - Complete Guide

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git push origin main
```

### Step 2: Go to Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Select your GitHub repository: **rahulraj9690/Kisaan-Bandhu**
4. Click **"Import"**

### Step 3: Configure Project Settings
1. **Framework Preset:** Select **"Other"**
2. **Build Command:** Leave as default (it will use root package.json)
3. **Output Directory:** Leave blank
4. **Install Command:** `npm run install-all`

### Step 4: Add Environment Variables
Click **"Environment Variables"** and add:

| Key | Value | 
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://username:password@cluster.mongodb.net/kisaanbandhu` |
| `NODE_ENV` | `production` |

**Note:** Replace with your actual MongoDB Atlas connection string

### Step 5: Deploy
Click **"Deploy"** and wait ~2-3 minutes

### Get Your Vercel URL
After deployment completes, you'll see:
- **Production URL:** `https://kisaan-bandhu.vercel.app`
- **API URL:** `https://kisaan-bandhu.vercel.app/api`

**Test your deployment:**
```
https://kisaan-bandhu.vercel.app/api/health
```

Should return: `{"status":"ok","message":"Kisaan Bandhu Backend Running"}`

---

## Option 2: Deploy to Render (Alternative)

### Step 1: Go to Render Dashboard
1. Visit https://render.com
2. Sign up or log in with GitHub
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub repository

### Step 2: Configure Render
- **Name:** `kisaan-bandhu`
- **Environment:** `Node`
- **Build Command:** `cd backend && npm install`
- **Start Command:** `cd backend && npm start`
- **Plan:** Free tier

### Step 3: Add Environment Variables
Click **"Environment"** and add:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kisaanbandhu
NODE_ENV=production
```

### Step 4: Deploy
Click **"Create Web Service"** and wait ~5-10 minutes

### Get Your Render URL
After deployment, you'll see:
- **Production URL:** `https://kisaan-bandhu.onrender.com`
- **API URL:** `https://kisaan-bandhu.onrender.com/api`

**Test your deployment:**
```
https://kisaan-bandhu.onrender.com/api/health
```

---

## Deploying Frontend Separately (Optional)

### Deploy Frontend to Vercel
If you want frontend and backend on separate Vercel domains:

**In your project:**
```bash
cd frontend
vercel --prod
```

This deploys the `frontend` directory to a separate Vercel URL.

---

## Update config.js for Production URLs

If deploying frontend and backend separately, update `frontend/config.js`:

```javascript
const API_CONFIG = {
  apiBaseUrl: typeof window !== "undefined" 
    ? {
        development: "http://localhost:5000",
        production: "https://kisaan-bandhu-api.vercel.app" // Your backend API URL
      }[process.env.NODE_ENV || "development"]
    : "/api",

  endpoints: {
    jobs: "/jobs",
    labour: "/labour",
    machines: "/machines",
    users: "/users",
    health: "/health"
  },

  getFullUrl: function(endpoint) {
    return this.apiBaseUrl + endpoint;
  }
};
```

---

## MongoDB Atlas Setup (Required)

### Create Free MongoDB Atlas Cluster

1. Visit https://www.mongodb.com/cloud/atlas
2. Click **"Sign Up"**
3. Create account
4. Click **"Create a New Project"**
5. Click **"Create a Deployment"**
   - Select **"Free"** tier (M0)
   - Provider: AWS
   - Region: Nearest to you
6. Click **"Create"** and wait ~5 minutes

### Get Connection String

1. In Cluster, click **"Connect"**
2. Choose **"Drivers"** → **"Node.js"**
3. Copy the connection string
4. Replace `<username>`, `<password>`, `<cluster-name>` with your details
5. Add this as `MONGODB_URI` in your deployment platform

Example:
```
mongodb+srv://user:password123@cluster.mongodb.net/kisaanbandhu
```

---

## Verify Both Deployments Work

### Test API Health Check

```bash
# Vercel
curl https://kisaan-bandhu.vercel.app/api/health

# Render
curl https://kisaan-bandhu.onrender.com/api/health
```

Both should return:
```json
{"status":"ok","message":"Kisaan Bandhu Backend Running"}
```

### Test Frontend

Visit the URL in browser:
- Check browser console - should see "✅ Backend connected"
- Forms should be able to submit data

---

## Troubleshooting

### Build Failed on Vercel
- Check that `/api/index.js` exists
- Verify `backend/package.json` has all dependencies
- Check build logs in Vercel dashboard

### API 502 Error
- Verify `MONGODB_URI` environment variable is set correctly
- Check MongoDB Atlas allows Vercel/Render IPs
- Wait 1-2 minutes after deployment

### Blank Page in Frontend
- Check browser console for errors
- Verify `config.js` is loaded
- Check that API endpoint is correct

### MongoDB Connection Refused
- Whitelist Render/Vercel IP in MongoDB Atlas:
  1. Go to MongoDB Atlas Dashboard
  2. **Network Access** → **Add IP Address**
  3. Add **0.0.0.0/0** (allows all IPs)
4. Verify connection string in environment variables

---

## Final URLs After Deployment

### Vercel Deployment
- **Frontend + Backend:** https://kisaan-bandhu.vercel.app
- **API Endpoint:** https://kisaan-bandhu.vercel.app/api
- **Health Check:** https://kisaan-bandhu.vercel.app/api/health

### Render Deployment
- **Frontend + Backend:** https://kisaan-bandhu.onrender.com
- **API Endpoint:** https://kisaan-bandhu.onrender.com/api
- **Health Check:** https://kisaan-bandhu.onrender.com/api/health

---

## Next Steps

1. ✅ Set up MongoDB Atlas cluster
2. ✅ Deploy to Vercel and/or Render
3. ✅ Get your production URLs
4. ✅ Update frontend config with API URLs
5. ✅ Test forms and API calls
6. ✅ Share URLs with team

