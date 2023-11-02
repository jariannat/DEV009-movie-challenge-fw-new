import React from "react";
import { Link } from "react-router-dom"
import './style.css'

const MovieItem = ({id, title, year, imageUrl}) => {
  
  return (
    <Link to={`detail/${id}`}>
    <article className="post">
      <img src={imageUrl} alt="Póster de película" />
      <div className="contentText">
        <span className="titulo">{title}</span>
        <span className="year">{year}</span>
      </div>
    </article>
    </Link>
  );
}

export default MovieItem;