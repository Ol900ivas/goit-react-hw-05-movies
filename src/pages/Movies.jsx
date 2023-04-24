import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieList } from '../components/MovieList/MovieList';
import SearchBox from '../components/SearchBox/SearchBox';
import { fetchMovieByName } from '../servises/fetch';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') return;
    getMovieByName();
    async function getMovieByName() {
      const results = await fetchMovieByName(movieName);
      const movieSet = results.map(({ id, title, poster_path }) => ({
        id,
        title,
        poster_path,
      }));
      if (movieSet.length === 0)
        toast.error(`Nothing was found. Try to change your query`);
      setMovies([...movieSet]);
    }
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.query.value;
    value.trim() !== ''
      ? setSearchParams({ query: value })
      : toast.warn(`Please, enter your query`);
    evt.currentTarget.reset();
  };
  return (
    <main>
      <h1>Movies</h1>
      <SearchBox onSubmit={handleSubmit} />
      <MovieList movies={movies} />
      <ToastContainer />
    </main>
  );
};

export default Movies;
