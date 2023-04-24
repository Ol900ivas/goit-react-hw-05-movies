import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieList } from '../components/MovieList/MovieList';
import SearchBox from '../components/SearchBox/SearchBox';
import { getSearchMuvieByName } from '../servises/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') return;
    getMovieByName();
    async function getMovieByName() {
      const results = await getSearchMuvieByName(movieName);
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
    console.log(evt.target);
    value.trim() !== ''
      ? setSearchParams({ query: value })
      : toast.warn(`Please, enter your query`);
    evt.target.reset();
  };
  return (
    <main>
      <h1>Movies</h1>
      <SearchBox onSubmit={handleSubmit} />
      <MovieList movies={movies} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        laborum amet ab cumque sit nihil dolore modi error repudiandae
        perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
        mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic
        asperiores facere natus sapiente cum neque laudantium quam, expedita
        voluptates atque quia aspernatur saepe illo, rem quasi praesentium
        aliquid sed inventore obcaecati veniam? Nisi magnam vero, dolore
        praesentium totam ducimus similique asperiores culpa, eius amet
        repudiandae quam ut. Architecto commodi, tempore ut nostrum voluptas
        dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi
        eaque voluptatibus eveniet error, nulla rem iusto?
      </p>
      <ToastContainer />
    </main>
  );
};

export default Movies;

// /search/search - movies пошук фільму за ключовим
//  словом на сторінці фільмів.
