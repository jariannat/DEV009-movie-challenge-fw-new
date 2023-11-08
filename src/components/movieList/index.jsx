import React from "react";
import MovieItem from "../movieItem";
import ArrowTriangle from "../../icons/arrowTriangle";
import './style.css'

const MovieList = ({ data, page, cantPage, handleClickPage }) => {

    const handlePrevious = () => {
        if (page > 1) {
            handleClickPage(page - 1);
        }
      };
    
      const handleNext = () => {
        if (page < cantPage)
        handleClickPage(page + 1);
      };

    return (
        <section className="container" data-testid='movie-list'>
            <div className="list" >
           {
                    data.map(movie => {
                        const releaseYear = new Date(movie.release_date).getFullYear();
                        return <MovieItem title={movie.title} year={releaseYear} imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} key={movie.id} id={movie.id} />
                    })
                }  
             </div>
            <div className="paginator">
                <div onClick={handlePrevious} data-testid="previous-button"> <ArrowTriangle color={page > 1 ? "#CDCDCD" : "#878585"} rotation={180}/></div>
                <div className="number-page"> {page} </div>
                <div onClick={handleNext} data-testid="next-button"> <ArrowTriangle color={page === cantPage ? "#878585" : "#CDCDCD"} /> </div>
            </div>
        </section>
    );
}

export default MovieList;