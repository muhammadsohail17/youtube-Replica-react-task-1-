import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput/SearchInput";
import { Tooltip } from "@mui/material";

// const clickbutton = () => {
//   alert("clicked");
// };

function Header() {
  return (
    <div className="Header">
      <div className="Header-left">
        <MenuIcon />
        <Link to="/">
          <img
            className="HeaderLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          ></img>
        </Link>
      </div>

      <SearchInput />

      <div className="HeaderIcons">
        <Link to="/uploadVideo">
          <Tooltip title="Upload Video">
            <CloudUploadIcon
              className="HeaderIcon"
              style={{ cursor: "pointer" }}
              //   onClick={clickbutton}
            />
          </Tooltip>
        </Link>
        <VideoCallIcon className="HeaderIcon" />
        <AppsIcon className="HeaderIcon" />
        <NotificationsIcon className="HeaderIcon" />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
