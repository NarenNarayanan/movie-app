const baseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/tmdb";

// Warn if production env is missing API URL
if (process.env.NODE_ENV === 'production' && !process.env.REACT_APP_API_BASE_URL) {
  console.warn('⚠️ REACT_APP_API_BASE_URL is not set in production environment');
}

const apiConfig = {
  // Redirect all API calls through your backend proxy
  //baseUrl: "http://localhost:5000/api/tmdb", 
  //WHEN DEPLOYING :
  baseUrl: "https://movie-app-ifk9.onrender.com/api/tmdb",
  
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
