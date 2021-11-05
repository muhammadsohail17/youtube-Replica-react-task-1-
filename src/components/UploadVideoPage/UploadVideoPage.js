import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import "./UploadVideoPage.css";

export function UploadvideoPage() {
  const [Title, setTitle] = useState("");
  const [image, setimage] = useState("");
  const [time, setTime] = useState(new Date());
  const history = useHistory();
  useEffect(() => {
    setTime(
      time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour12: true,
      })
    );
  }, []);

  const handleChangeTitle = (event, type) => {
    if (type === "title") {
      setTitle(event.target.value);
    }
    if (type === "image") {
      let img;
      img = URL.createObjectURL(event.target.files[0]);
      setimage(img);
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let a = JSON.parse(localStorage.getItem("newVideoData"));
    let array3;
    if (a) {
      let data = [{ title: Title, image, timestamp: time }];
      array3 = a.concat(data);
    } else {
      array3 = [{ title: Title, image, timestamp: time }];
    }

    localStorage.setItem("newVideoData", JSON.stringify(array3));
    history.push("/");
  };

  return (
    <div className="UploadVideoForm">
      <form onSubmit={onHandleSubmit} className="formClass1">
        <h3>Upload Video</h3>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "60ch" },
          }}
          noValidate
          autoComplete="off"
          className="formClass"
        >
          <input
            accept="image/*"
            type="file"
            id="standard-basic"
            variant="standard"
            onChange={(event) => handleChangeTitle(event, "image")}
            alt="alt"
            className="inputImage"
          />

          <TextField
            name="title"
            label="Video Title"
            variant="standard"
            onChange={(event) => handleChangeTitle(event, "title")}
            value={Title}
          />
          <TextField
            disabled
            id="standard-basic"
            label="Current time"
            variant="standard"
            value={time}
          />
        </Box>
        <Button type="submit" variant="contained" disableElevation>
          Upload
        </Button>
      </form>
    </div>
  );
}
