import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tmdbRoutes from "./routes/tmdb.js";

// Load environment variables early
dotenv.config();

// Validate TMDB API key
if (!process.env.TMDB_API_KEY) {
  console.error("ERROR: TMDB_API_KEY not found in environment variables");
  process.exit(1);
}

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
//app.use(cors());
app.use(express.json());

// Mount TMDB routes
app.use("/api/tmdb", tmdbRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test TMDB connection at: http://localhost:${PORT}/api/tmdb/test`);
});