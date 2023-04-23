import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    // getMoviebyID(); HTTP запит
  }, []);
  return (
    <main>
      <h1>Movie details: {movieId}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;

// /movies/get - movie - details запит повної інформації
//  про фільм для сторінки кінофільму.
