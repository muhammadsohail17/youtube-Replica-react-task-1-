import React from "react";
// import VideoRow from '../ChannelRow/VideoRow/VideoRow';
import "./RecomendedVideos.css";
import VideoCard from "./VideoCard/VideoCard";
import RecomendedVideosData from "./RecomendedVideos.json";

function RecomendedVideos() {
  let a = JSON.parse(localStorage.getItem("newVideoData"));
  console.log(`a`, a);
  return (
    <div className="RecomendedVideos">
      <h2>RecomendedVideos</h2>
      <div className="RecomendedVideos_video">
        {a &&
          a.length > 0 &&
          a.map((item, index) => {
            return (
              <VideoCard
                key={index}
                title={item.title}
                // views={item.views}
                timestamp={item.timestamp}
                // channel={item.channel}
                image={item.image}
              />
            );
          })}
      </div>
    </div>
  );
}

export default RecomendedVideos;
