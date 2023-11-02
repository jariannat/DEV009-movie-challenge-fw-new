// HomePage.js
import React, { useEffect, useState } from 'react';
import { getMovie } from '../../services/services';
import MovieList from '../../components/movieList';
import MovieListLoading from '../../components/loadingHome';
import Filter from '../../components/filter';
import { genders } from '../../utils/genre';
import { sorts } from '../../utils/order';

import './style.css';



const HomePage = () => {
  const [data, setData] = useState({}); //el useState es una funcion, esto se debe cumpluir para los states en react.
  // useState es la funcion, data es la variable y set data es la que sera modificada por la funcion. 
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState(genders[0]);
  const [currentSorts, setCurrentSorts] = useState(sorts[0]);


  useEffect(() => {
    // Función para cargar los datos
    const fetchData = (page, genre, sort) => {
      if(loading){
        getMovie(page, genre, sort)
        .then((result) => {
          setData(result.data);
          setLoading(false);
        });
      }
     
    };

    // Cargar datos iniciales
    fetchData(currentPage, currentGenre, currentSorts);
  }, [currentPage, currentGenre, currentSorts]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setLoading(true);
  };

  const handleGenreChange = (genre) => {
    setCurrentGenre(genre);
    setLoading(true);
  };

  const handleSortChange = (sort) => {
    setCurrentSorts(sort);
    setLoading(true);
  };



  return (
    <div className='home-view' data-testid='home-view'> 
     <div className='filters'>
        <Filter dataFilter={sorts} handleClickFilter={handleSortChange} selected={currentSorts.name}/>
        <Filter dataFilter={genders} handleClickFilter={handleGenreChange} selected={currentGenre.name}/>
      </div>
      {
        !loading ?
          <MovieList
            data={data.results}
            page={currentPage}
            cantPage={data.total_pages}
            handleClickPage={handlePageChange}
            data-testid='movie-list'
            
          />
          : <MovieListLoading />
      }
    </div>
  );
}

export default HomePage;
