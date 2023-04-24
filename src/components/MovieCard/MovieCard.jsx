import defaultPoster from '../../images/defaultPoster.png';

const MovieCard = ({ poster, title, date, vote, overview, genres }) => {
  const percentageVote = Math.round(vote * 10);
  const releaseYear = new Date(date).getFullYear();
  const imageUrl = 'https://image.tmdb.org/t/p/w300/';
  return (
    <>
      <img
        src={poster ? `${imageUrl}${poster}` : defaultPoster}
        alt={title}
        width={360}
      />
      <div>
        <h2>
          {title} ({releaseYear})
        </h2>
        <p>User score: {percentageVote}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    </>
  );
};
export default MovieCard;
