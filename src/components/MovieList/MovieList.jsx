import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, CardWrapper, MovieName } from './MovieList.styled';
import defaultPoster from '../../images/defaultPoster.png';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const imageUrl = 'https://image.tmdb.org/t/p/w300/';
  return (
    <Container>
      {movies.map(({ id, poster_path, title }) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={poster_path ? `${imageUrl}${poster_path}` : defaultPoster}
              alt=""
              height={360}
              width={280}
            />
            <MovieName>{title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
