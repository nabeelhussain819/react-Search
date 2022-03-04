import React, { useState } from "react";
import "../gallery/image.css";
import ImageGallery from "./ImageGallery";

function Search() {
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value.toLowerCase();
    setName(data);
  }
  return (
    <>
      <div className="container">
        <div class="search-container">
          <form action="/action_page.php">
            <input
              type="text"
              placeholder="Search.."
              onChange={searchData}
              className="searchInput"
              name="search"
            />
          </form>
        </div>
        <ImageGallery nabeel={name} />
      </div>
    </>
  );
}

export default Search;
