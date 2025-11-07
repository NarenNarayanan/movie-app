const express = require('express');
const axios = require('axios');
const router = express.Router();
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Generic media route (handles both movie and tv)
router.get("/:category/:type", async (req, res) => {
    const { category, type } = req.params;
    
    try {
        const response = await axios.get(
            `${TMDB_BASE_URL}/${category}/${type}`,
            {
                params: { 
                    api_key: process.env.TMDB_API_KEY,
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error(`TMDB Error (${category}/${type}):`, error.message);
        res.status(error.response?.status || 500).json({ 
            error: `Failed to fetch ${category}/${type} from TMDB`,
            details: error.message
        });
    }
});

module.exports = router;