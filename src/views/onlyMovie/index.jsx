import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetail } from '../../services/services';
import ReturnSvg from '../../icons/return';
import Fullstart from '../../icons/fullStart';
import Start from '../../icons/start';
import './style.css';

export const OnlyMovie = () => {
  const [data, setData] = useState({
    poster_path: '',
    title: '',
    overview: '',
    vote_count: 0,
    release_date: '---',
    vote_average: 0,
    genres: [],
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchDetail = (id) => {
      getMovieDetail(id)
        .then((result) => {
          console.log('Data received:', result.data);
          setData({
            poster_path: result.data.poster_path,
            title: result.data.title,
            overview: result.data.overview,
            vote_count: result.data.vote_count,
            release_date: result.data.release_date,
            vote_average: result.data.vote_average,
            genres: result.data.genres,
          });
        })
        .catch((error) => {
          console.error('Error fetching movie detail:', error);
        });
    };

    fetchDetail(id);
  }, [id]);

  // estrellas
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 2; i <= 10; i += 2) {
      if (i <= rating) {
        stars.push(<span key={i} className="star-filled">  <Fullstart /> </span>);
      } else {
        stars.push(<span key={i} className="star-empty"><Start /></span>);
      }
    }
    return stars;
  };
  return (
    <div>
      <article className="detail-poster">
        <div className='poster-image'>
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Poster" />

        </div>
        <div className="order" data-testid="movie-detail-view">
          <h1 className="movieTitle">{data.title}</h1>
          <div className="vote_average">{renderStars(data.vote_average)}</div>
          <span className="release_date">({data.release_date})</span>
          <h2 className="vote_count">Votos: {data.vote_count}</h2>
          <p className="overview">Sinopsis: {data.overview}</p>
          <ul className="genres">
            Géneros:
            {data.genres.map((genre) => (
              <li key={genre.id} className="genre">
                {genre.name}
              </li>
            ))}
          </ul>
        </div>

      </article>
      <Link to="/" className="return">
        <ReturnSvg />
            </Link>
    </div>
  );
};

// export default OnlyMovie;
