# Kisaan Bandhu - Agricultural Platform

A full-stack web application connecting farmers, labourers, and agricultural machinery providers.

## Features

- 🌾 Hire farm labour easily
- 💼 Post and find farm jobs
- 🚜 Machine rental platform
- 👥 User profiles and ratings
- 📍 Location-based services

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Vercel (serverless functions)
- **ORM:** Prisma (optional)

## Project Structure

```
kisaan-bandhu/
├── frontend/          # Static website
├── backend/           # API server
├── api/               # Vercel serverless functions
├── prisma/            # Database schema
└── vercel.json        # Deployment config
```

## Quick Start

### Development

```bash
# Install dependencies
npm run install-all

# Create environment file
cp .env.example .env

# Run backend server
npm run dev

# Open http://localhost:5000 in browser
```

### Production

See [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel deployment instructions.

## Environment Variables

Create a `.env` file with:

```
MONGODB_URI=mongodb://127.0.0.1:27017/kisaanbandhu
DATABASE_URL=postgresql://...
NODE_ENV=development
PORT=5000
```

See `.env.example` for all available variables.

## API Routes

- `GET /api/health` - Health check
- `GET /api/` - API info
- `POST /api/labour/add` - Submit labour request
- `POST /api/jobs/add` - Post a job
- `POST /api/machines/add` - List a machine
- `POST /api/users/add` - Register user

## Frontend Pages

- `index.html` - Home page
- `hire.html` - Hire labour form
- `jobs.html` - Available jobs
- `labours.html` - Labour list
- `machines.html` - Machine rentals
- `login.html` - User authentication
- `locations.html` - Location finder

## Development

### Adding New API Routes

1. Create a route handler in `backend/routes/`
2. Register it in `/api/app.js`
3. Update `frontend/config.js` if needed
4. Update `frontend/css/js/script.js` to use new endpoint

### Database Models

Models are defined in `backend/models/` directory:
- `User.js`
- `Labour.js`
- `Job.js`
- `Machine.js`

## Deployment

### Local Deployment

```bash
npm run start
```

### Vercel Deployment

```bash
vercel --prod
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed Vercel setup.

## Troubleshooting

### Blank Page on Production

1. Check that all API endpoints are configured in `API_CONFIG`
2. Ensure MongoDB connection string is set in Vercel environment variables
3. Check browser console for JavaScript errors
4. Verify CORS is enabled in Express

### Function Invocation Failed

1. Check Vercel logs: `vercel logs`
2. Verify `/api/index.js` is properly structured
3. Ensure all environment variables are set
4. Check MongoDB connection

### API 404 Errors

1. Verify API routes are exported from `backend/routes/`
2. Check route registration in `/api/app.js`
3. Verify route prefix matches frontend `config.js`

## Contributing

1. Create a feature branch
2. Make changes
3. Test locally
4. Commit and push
5. Create a pull request

## License

ISC

## Support

For issues and questions, open an issue on GitHub.

