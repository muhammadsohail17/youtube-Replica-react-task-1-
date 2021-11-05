import React, { useState } from "react";
import "./SearchInput.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import searchArray from "./SearchArray";

function searchInput() {
  const [inputSearch, setInputSearch] = useState("");
  const [searchReasult, setsearchReasult] = useState([]);

  const search = (e) => {
    let newInput = e.target.value;
    var newArray = [];
    if (newInput.length >= 3) {
      newArray = searchArray.filter((x) => x.title.includes(newInput));
      console.log(newArray);
      setsearchReasult(newArray);
    }
    if (newInput.length < 3) {
      setsearchReasult(searchArray);
    }
  };
  return (
    <div className="HeaderInput">
      <input
        onChange={(e) => {
          setInputSearch(e.target.value);
          search(e);
        }}
        value={inputSearch}
        type="text"
        placeholder="Search"
      />

      <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="HeaderInputButton" />
      </Link>
    </div>
  );
  //   <ul className="inputItemSearch">
  //     {searchReasult.map((item) => (
  //       <li>{item}</li>
  //     ))}
  //   </ul>;
}

export default searchInput;
