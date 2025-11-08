import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tmdbRoutes from "./routes/tmdb.js";

dotenv.config();

const app = express();

// Allow cross-origin requests (adjust origin in production as needed)
app.use(cors());
app.use(express.json());

// Root wake-up route (used by frontend to wake sleeping Render instance)
app.get("/", (req, res) => {
  return res.json({ status: "ok", message: "✅ TMDB Proxy Server Running" });
});

// Mount TMDB proxy routes at /api/tmdb
app.use("/api/tmdb", tmdbRoutes);

// Warn if TMDB key is missing but do not crash the server (so health checks+wake pings work)
if (!process.env.TMDB_API_KEY) {
  console.warn("WARNING: TMDB_API_KEY not found in environment variables. TMDB requests will fail until configured.");
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`TMDB routes mounted at: /api/tmdb`);
  console.log(`Health check: http://localhost:${PORT}/ (or your Render URL `/`` + `)`);
});