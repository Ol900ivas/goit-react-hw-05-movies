import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getSearchMuvieById } from '../servises/api';
import MovieCard from '../components/MovieCard/MovieCard';
import Loader from '../components/Loader/Loader';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    getMovieById();
    async function getMovieById() {
      const data = await getSearchMuvieById(movieId);
      setMovieInfo(data);
    }
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;
  console.log(location);
  return (
    <main>
      <Link to={backLinkLocation.current}>Go back</Link>
      <h1>Movie details: {movieId}</h1>
      <MovieCard
        poster={poster_path}
        title={title}
        date={release_date}
        vote={vote_average}
        overview={overview}
        genres={genres}
      />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

// /movies/get - movie - details запит повної інформації
//  про фільм для сторінки кінофільму.
