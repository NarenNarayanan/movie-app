import axios from "axios";
//import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  // Remove paramsSerializer as we're handling params directly in API calls
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    console.error("Failed URL:", error.config?.url);
    throw error;
  }
);

export default axiosClient;