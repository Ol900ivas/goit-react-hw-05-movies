import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { fetchMovieById } from '../servises/fetch';

import MovieCard from '../components/MovieCard/MovieCard';
import Loader from '../components/Loader/Loader';
import { SubTitle, Ul } from '../components/MovieCard/MovieCard.styled';
import NotFound from '../components/NotFound/NotFound';
import { StyledLink, Span } from '../components/NotFound/NotFound.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    getMovieById();
    async function getMovieById() {
      try {
        const data = await fetchMovieById(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [movieId]);
  if (!movieInfo) {
    return <NotFound />;
  }
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;

  return (
    <main>
      <StyledLink to={backLinkLocation.current}>
        <BsArrowLeft size={20} />
        <Span>Go back</Span>
      </StyledLink>
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
          <Link to="cast">
            <b>Cast</b>
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <b>Reviews</b>
          </Link>
        </li>
      </Ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
