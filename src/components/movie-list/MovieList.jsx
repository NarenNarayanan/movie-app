import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./movie-list.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import MovieCard from "../movie-card/MovieCard";

import tmdbApi, { category } from "./../../api/tmdbApi";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      try {
        if (props.type !== "similar") {
          switch (props.category) {
            case category.movie:
              response = await tmdbApi.getMoviesList(props.type, { params });
              break;
            default:
              response = await tmdbApi.getTvList(props.type, { params });
          }
        } else {
          response = await tmdbApi.similar(props.category, props.id);
        }
        setItems(response.results || []);
      } catch (err) {
        console.error("Error fetching movie list:", err);
      }
    };
    getList();
  }, [props.category, props.id, props.type]);

  // Initialize SwiperCore with modules
  SwiperCore.use([Navigation]);

  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation={true}
        modules={[Navigation]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
