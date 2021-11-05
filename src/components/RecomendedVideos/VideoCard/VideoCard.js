import React from "react";
import "./VideoCard.css";
import Avatar from "@mui/icons-material/AccountCircle";
function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="VideoCard">
      <img className="VideoCardThumbNail" src={image} alt="" />
      <div className="VideoCardInfo">
        <Avatar className="VideoCardAvatar" alt={channel} src={channelImage} />
        <div className="VideoCardText">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}.{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
