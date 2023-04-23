import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  useEffect(() => {
    // getMoviebyID(); HTTP запит
  }, []);

  return <p>And this is the movie reviews: {movieId}</p>;
};

export default Reviews;

// /movies/get - movie - reviews
// запит оглядів для сторінки кінофільму.
