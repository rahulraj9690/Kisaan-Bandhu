const app = require("./app");

// Export for Vercel
module.exports = (req, res) => {
  // Remove /api prefix from req.url for the Express app
  req.url = req.url.replace(/^\/api/, "") || "/";
  
  return app(req, res);
};
