import express from "express";
import axios from "axios";

const router = express.Router();
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Simple /test endpoint available at /api/tmdb/test
router.get("/test", (req, res) => {
  if (!process.env.TMDB_API_KEY) {
    return res.status(500).json({ ok: false, error: "TMDB_API_KEY not configured" });
  }
  return res.json({ ok: true, message: "TMDB API route working", timestamp: new Date().toISOString() });
});

// Allowed categories/types
const validCategories = ["movie", "tv"];
const validTypes = {
  movie: ["upcoming", "popular", "top_rated"],
  tv: ["popular", "top_rated", "on_the_air"]
};

// GET details by ID
router.get("/:category/detail/:id", async (req, res) => {
  const { category, id } = req.params;
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${id}`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 502).json({ error: err.message });
  }
});

// GET credits
router.get("/:category/:id/credits", async (req, res) => {
  const { category, id } = req.params;
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${id}/credits`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 502).json({ error: err.message });
  }
});

// GET similar
router.get("/:category/:id/similar", async (req, res) => {
  const { category, id } = req.params;
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${id}/similar`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 502).json({ error: err.message });
  }
});

// GET videos
router.get("/:category/:id/videos", async (req, res) => {
  const { category, id } = req.params;
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${id}/videos`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 502).json({ error: err.message });
  }
});

// List routes (movie/tv)
router.get("/:category/:type", async (req, res) => {
  const { category, type } = req.params;
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
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
    res.status(err.response?.status || 502).json({ error: err.message });
  }
});

export default router;
