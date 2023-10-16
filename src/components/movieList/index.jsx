import React from "react";
import MovielItem from "../movieItem";
import ArrowTriangle from "../../icons/arrowTriangle";
import './style.css'

const MovieList = ({ data, page, cantPage, handleClickPage }) => {

    const handlePrevious = () => {
        console.log('previus', page, cantPage)
        if (page > 1) {
            handleClickPage(page - 1);
        }
      };
    
      const handleNext = () => {
        console.log('next', page, cantPage)
        if (page < cantPage)
        handleClickPage(page + 1);
      };

    return (
        <section className="container">
            <div className="list">
           {
                    data.map(movie => {
                        const releaseYear = new Date(movie.release_date).getFullYear();
                        return <MovielItem title={movie.title} year={releaseYear} imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} key={movie.id} />
                    })
                }  
             </div>
            <div className="paginator">
                <div onClick={handlePrevious}> <ArrowTriangle  color ={page>1 ?"#CDCDCD":"#878585"} rotation={180}/></div>
                <div className="number-page"> {page} </div>
                <div onClick={handleNext}> <ArrowTriangle  color ={page===cantPage ?"#878585":"#CDCDCD"} /> </div>
            </div>
        </section>
    );
}

export default MovieList;