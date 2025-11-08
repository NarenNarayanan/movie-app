import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => axiosClient.get(`/movie/${movieType[type]}`, { params }),

  getTvList: (type, params) => axiosClient.get(`/tv/${tvType[type]}`, { params }),

  search: (cate, params) => axiosClient.get(`/search/${category[cate]}`, { params }),

  detail: (cate, id, params) => axiosClient.get(`/${category[cate]}/detail/${id}`, { params }),

  credits: (cate, id) => axiosClient.get(`/${category[cate]}/${id}/credits`),

  similar: (cate, id) => axiosClient.get(`/${category[cate]}/${id}/similar`),

  
  getVideos: (cate, id) => axiosClient.get(`/${category[cate]}/${id}/videos`),
};

export default tmdbApi;
