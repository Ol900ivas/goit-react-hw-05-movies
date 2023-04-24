import { useState, useEffect } from 'react';
import { getTrending } from '../servises/api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies();
    async function getTrendingMovies() {
      try {
        const results = await getTrending();
        console.log(results);
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
      <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;

// /trending/get - trending список найпопулярніших фільмів на сьогодні
//  для створення колекції на головній сторінці.
