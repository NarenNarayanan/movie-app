const apiConfig = {
  // Redirect all API calls through your backend proxy
  //baseUrl: "http://localhost:5000/api/tmdb",  // Remove trailing slash
  //WHEN DEPLOYING :
  baseUrl: "https://your-backend-service.onrender.com/api/tmdb/",
  
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
