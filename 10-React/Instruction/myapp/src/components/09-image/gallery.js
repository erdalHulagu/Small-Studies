import React from "react";
import "./gallery.scss";
import images from "./images.json";

const c = "gallery";

const Gallery = () => {
  return (
    <div className={`${c} row`}>
      {images.map((img, i) => (
        <div key={i}>
          <a href={require(`../../assets/img/${img.name}`)} target="_blank"><img src={require(`../../assets/img/${img.name}`)} alt="" /></a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;


