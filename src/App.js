import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import Index from "./components/headers/Index";
import ImageGallery from "./components/gallery/ImageGallery";
import Search from "./components/gallery/search";

function App(props) {
  
  return (
    <React.Fragment>
      <Search />
    </React.Fragment>
  );
}

export default App;
