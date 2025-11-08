import express from "express";
import axios from "axios";

const router = express.Router();
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Add test endpoint
router.get('/test', (req, res) => {
  if (!process.env.TMDB_API_KEY) {
    return res.status(500).json({ error: 'TMDB API key not configured' });
  }
  res.json({ 
    message: 'TMDB API route working', 
    timestamp: new Date().toISOString() 
  });
});

// Allowed categories
const validCategories = ["movie", "tv"];
const validTypes = {
  movie: ["upcoming", "popular", "top_rated"],
  tv: ["popular", "top_rated", "on_the_air"]
};

// ✅ Ensure TMDB key exists
if (!process.env.TMDB_API_KEY) {
  console.error("❌ Missing TMDB_API_KEY in environment variables");
}

// ✅ DETAIL should come BEFORE the generic route
router.get("/:category/detail/:id", async (req, res) => {
  const { category, id } = req.params;

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${id}`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

// ✅ CREDITS
router.get("/:category/:id/credits", async (req, res) => {
  const { category, id } = req.params;

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${id}/credits`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

// ✅ SIMILAR SHOWS
router.get("/:category/:id/similar", async (req, res) => {
  const { category, id } = req.params;

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${id}/similar`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});
// ✅ VIDEOS (Trailers, clips, teasers)
router.get("/:category/:id/videos", async (req, res) => {
  const { category, id } = req.params;

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${id}/videos`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

// ✅ LIST ROUTE (MOVIE/TV)
router.get("/:category/:type", async (req, res) => {
  const { category, type } = req.params;

  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: `Invalid category` });
  }

  if (!validTypes[category].includes(type)) {
    return res.status(400).json({ error: `Invalid type for ${category}` });
  }

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${type}`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

export default router;
