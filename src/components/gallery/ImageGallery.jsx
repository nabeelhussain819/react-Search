import React, { useState, useEffect } from "react";

import "../gallery/image.css";

function ImageGallery(props) {
  const imageData = [
    {
      name: "snowy mountains",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "icy mountains",
      url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    },
    {
      name: "sea and sunset",
      url: "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "sea and sunset",
      url: "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "sea view",
      url: "https://imaXges.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "sunset",
      url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      name: "space",
      url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const filteredData = imageData.filter((data) => {
    if (props.nabeel === "") {
      return data;
    } else {
      return data.name.includes(props.nabeel);
    }
  });

  return (
    <>
      <div className="container">
        {" "}
        <h1>Image Gallery </h1>
        <hr />
        <div className="row">
          {filteredData.map((data) => {
            return (
              <>
                <div className="column">
                  <div className="card">
                    <img src={data.url} style={{ marginTop: "12px" }} />
                    <h2>{data.name}</h2>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
