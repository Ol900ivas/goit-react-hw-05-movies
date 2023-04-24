// 91d51c28e9627ca3e06710d14d157b60
// For home
//https://api.themoviedb.org/3/trending/movie/day?api_key=91d51c28e9627ca3e06710d14d157b60
// "id": 868759,
// "title": "Ghosted",
// "poster_path": "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '91d51c28e9627ca3e06710d14d157b60',
};
export const imageUrl = 'https://image.tmdb.org/t/p/w300/';
export const fetchTrending = async () => {
  try {
    const {
      data: { results },
    } = await axios.get('/trending/movie/day');
    return results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieByName = async query => {
  try {
    const {
      data: { results },
    } = await axios.get('/search/movie', {
      params: { query: query },
    });
    console.log(results);
    return results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieById = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCast = async movieId => {
  try {
    const {
      data: { cast },
    } = await axios.get(`/movie/${movieId}/credits`);
    console.log(cast);
    return cast;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviews = async movieId => {
  try {
    const {
      data: { results },
    } = await axios.get(`/movie/${movieId}/reviews`);
    console.log(results);
    return results;
  } catch (error) {
    console.error(error);
  }
};
