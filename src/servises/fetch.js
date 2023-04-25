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
    console.log('Trending:', results);
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
    console.log('MovieByName:', results);
    return results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieById = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    console.log('MovieById:', data);
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
    console.log('Cast:', cast);
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
    console.log('Reviews:', results);
    return results;
  } catch (error) {
    console.error(error);
  }
};
