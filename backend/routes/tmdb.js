import express from "express";
import axios from "axios";

const router = express.Router();
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const validCategories = ["movie", "tv"];
const validTypes = {
  movie: ["upcoming", "popular", "top_rated"],
  tv: ["popular", "top_rated", "on_the_air"]
};

router.get("/:category/:type", async (req, res) => {
  const { category, type } = req.params;

  if (!validCategories.includes(category))
    return res.status(400).json({ error: `Invalid category` });

  if (!validTypes[category].includes(type))
    return res.status(400).json({ error: `Invalid type for ${category}` });

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${type}`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

// ✅ GET DETAILS BY ID
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

// ✅ GET CREDITS
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

// ✅ GET SIMILAR CONTENT
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

export default router;
