// API Configuration
// This file is used by the frontend to determine the API endpoint

const API_CONFIG = {
  // If running on Vercel, use relative path /api
  // Otherwise use localhost for development
  apiBaseUrl: typeof window !== "undefined" 
    ? (window.location.hostname === "localhost" 
      ? "http://localhost:5000" 
      : "/api")
    : "/api",

  // Endpoints
  endpoints: {
    jobs: "/jobs",
    labour: "/labour",
    machines: "/machines",
    users: "/users",
    health: "/health"
  },

  // Full URLs
  getFullUrl: function(endpoint) {
    return this.apiBaseUrl + endpoint;
  }
};

// Export for use in browser
if (typeof window !== "undefined") {
  window.API_CONFIG = API_CONFIG;
}
