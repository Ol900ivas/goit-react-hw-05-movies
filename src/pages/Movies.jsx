import { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { MovieList } from '../components/MovieList/MovieList';
// import { SearchBox } from '../components/SearchBox/SearchBox';
// import { getMovies } from '../API';

const Movies = () => {
  useEffect(() => {
    // getMoviebyID(); HTTP запит
  }, []);
  //   const movies = getMovies();
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const movieName = searchParams.get('name') ?? '';

  //   const visibleMovies = movies.filter(movie =>
  //     movie.name.toLowerCase().includes(movieName.toLowerCase())
  //   );

  //   const updateQueryString = name => {
  //     const nextParams = name !== '' ? { name } : {};
  //     setSearchParams(nextParams);
  //   };

  return (
    <main>
      <h1>Movies</h1>
      {/* <SearchBox value={movieName} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} /> */}
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
    </main>
  );
};

export default Movies;

// /search/search - movies пошук фільму за ключовим
//  словом на сторінці фільмів.
