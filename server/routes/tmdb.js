import express from "express";
import axios from "axios";

const router = express.Router();
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Validation helper
const validCategories = ['movie', 'tv'];
const validTypes = {
  movie: ['upcoming', 'popular', 'top_rated'],
  tv: ['popular', 'top_rated', 'on_the_air']
};

// Test route
router.get('/test', (req, res) => {
  res.json({ message: "TMDB API connected" });
});

// Main route handler for movie and TV
router.get('/:category/:type', async (req, res) => {
  const { category, type } = req.params;
  console.log(`TMDB API Request - Category: ${category}, Type: ${type}`);

  // Validate category and type
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: `Invalid category. Must be one of: ${validCategories.join(', ')}` });
  }

  if (!validTypes[category].includes(type)) {
    return res.status(400).json({ error: `Invalid type for ${category}. Must be one of: ${validTypes[category].join(', ')}` });
  }

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${category}/${type}`, {
      params: {
        api_key: process.env.TMDB_API_KEY
      }
    });
    
    console.log(`TMDB API Success - ${category}/${type}`);
    res.json(response.data);
  } catch (error) {
    console.error(`TMDB API Error - ${category}/${type}:`, error.message);
    res.status(error.response?.status || 500).json({
      error: `Failed to fetch ${category}/${type} from TMDB`,
      details: error.message
    });
  }
});

export default router;