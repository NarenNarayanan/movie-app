import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tmdbRoutes from "./routes/tmdb.js";

dotenv.config();

// Validate TMDB API key
if (!process.env.TMDB_API_KEY) {
  console.error("ERROR: TMDB_API_KEY not found in environment variables");
  process.exit(1);
}

const app = express();

// Configure CORS for both dev and production
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://movie-app-react-three.vercel.app']  // replace with your actual Vercel domain
    : 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Add wake-up route
app.get("/", (req, res) => {
  res.send("✅ TMDB Proxy Server Running");
});

// Mount TMDB routes at /api/tmdb
app.use('/api/tmdb', tmdbRoutes);

// Basic root route
app.get('/', (req, res) => {
  res.json({ message: 'Movie API Backend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test TMDB connection at: http://localhost:${PORT}/api/tmdb/test`);
});