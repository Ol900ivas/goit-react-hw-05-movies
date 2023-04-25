import PropTypes from 'prop-types';
import defaultPoster from '../../images/defaultPoster.png';
import {
  DetailsContainer,
  DetailsWrap,
  MovieTitle,
  Par,
  SubTitle,
  Ul,
  Li,
} from './MovieCard.styled';

const MovieCard = ({ poster, title, date, vote, overview, genres }) => {
  const percentageVote = Math.round(vote * 10);
  const releaseYear = new Date(date).getFullYear();
  const imageUrl = 'https://image.tmdb.org/t/p/w300/';
  return (
    <DetailsContainer>
      <img
        src={poster ? `${imageUrl}${poster}` : defaultPoster}
        alt={title}
        width={360}
      />
      <DetailsWrap>
        <MovieTitle>
          {title} ({releaseYear})
        </MovieTitle>
        <Par>User score: {percentageVote}%</Par>
        <SubTitle>Overview</SubTitle>
        <Par>{overview}</Par>
        <SubTitle>Genres</SubTitle>
        <Ul>
          {genres && genres.map(({ id, name }) => <Li key={id}>{name}</Li>)}
        </Ul>
      </DetailsWrap>
    </DetailsContainer>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  vote: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
};

export default MovieCard;
