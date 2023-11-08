import axios from 'axios';

export const getMovie =(page, genre, sort) => {
  
   const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzM3NDE2MGNmOGFiMGJiMGYyNTY0NGFhODZkOGRkYyIsInN1YiI6IjY1MWY5MzdkMDcyMTY2MDBhY2I3NTlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KWPPbLQBjW6q7lpHGVTQUm5egFuQSDBySY-Qit5Tl4k';
  return  axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=${sort.id}&with_genres=${genre.id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'accept': 'application/json',
    }})
  }

  export const getMovieDetail =(id) => {
  
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzM3NDE2MGNmOGFiMGJiMGYyNTY0NGFhODZkOGRkYyIsInN1YiI6IjY1MWY5MzdkMDcyMTY2MDBhY2I3NTlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KWPPbLQBjW6q7lpHGVTQUm5egFuQSDBySY-Qit5Tl4k';
   return  axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
     headers: {
       'Authorization': `Bearer ${token}`,
       'accept': 'application/json',
     }})
   }

