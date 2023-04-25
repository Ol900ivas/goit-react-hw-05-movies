import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { fetchMovieById } from '../servises/fetch';
import MovieCard from '../components/MovieCard/MovieCard';
import Loader from '../components/Loader/Loader';
import { SubTitle, Ul } from '../components/MovieCard/MovieCard.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    getMovieById();
    async function getMovieById() {
      const data = await fetchMovieById(movieId);
      setMovieInfo(data);
    }
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;

  return (
    <main>
      <Link to={backLinkLocation.current}>
        <BsArrowLeft />
        Go back
      </Link>
      <MovieCard
        poster={poster_path}
        title={title}
        date={release_date}
        vote={vote_average}
        overview={overview}
        genres={genres}
      />
      <SubTitle>Additional information</SubTitle>
      <Ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </Ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
