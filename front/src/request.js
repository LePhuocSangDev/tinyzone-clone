const API_KEY = "eaefff65310f516d5f7ac969f0d75a3f";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fecthActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fecthComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fecthHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fecthRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fecthDocumetaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
