import React from "react";
import './style.css'

const MovieItem = ({title, year, imageUrl}) => {
  
  return (
    <article className="post">
      <img src={imageUrl} alt="Póster de película" />
      <div className="contentText">
        <span className="titulo">{title}</span>
        <span className="year">{year}</span>
      </div>
    </article>
  );
}

export default MovieItem;