const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:7001"
    : "https://mern-blog-backend-4d9w.onrender.com";

module.exports = baseUrl;
