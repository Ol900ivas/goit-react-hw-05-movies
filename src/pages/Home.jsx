import { useState, useEffect } from 'react';
import { fetchTrending } from '../servises/fetch';
import { MovieList } from 'components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies();
    async function getTrendingMovies() {
      try {
        const results = await fetchTrending();

        const movieSet = results.map(({ id, title, poster_path }) => ({
          id,
          title,
          poster_path,
        }));

        setMovies([...movieSet]);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
