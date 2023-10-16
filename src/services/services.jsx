import axios from 'axios';

export const getMovie =(page) => {
  console.log(page, 'aca')
   const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzM3NDE2MGNmOGFiMGJiMGYyNTY0NGFhODZkOGRkYyIsInN1YiI6IjY1MWY5MzdkMDcyMTY2MDBhY2I3NTlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KWPPbLQBjW6q7lpHGVTQUm5egFuQSDBySY-Qit5Tl4k';
  return  axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'accept': 'application/json',
    }})
  }

