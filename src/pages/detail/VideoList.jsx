import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import tmdbApi from "../../api/tmdbApi";

const VideoList = ({ id }) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await tmdbApi.getVideos(category, id);

        // ✅ response is already data
        // ✅ response.results may be undefined -> fallback to []
        setVideos((response.results || []).slice(0, 5));
      } catch (err) {
        console.log("Video fetch error:", err);
      }
    };
    getVideos();
  }, [category, id]);

  return (
    <>
      {videos.map((item, index) => (
        <Video key={index} item={item} />
      ))}
    </>
  );
};

const Video = ({ item }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;
