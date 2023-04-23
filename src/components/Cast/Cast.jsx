import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  useEffect(() => {
    // getMoviebyID(); HTTP запит
  }, []);

  return <p>This is the movie cast: {movieId}</p>;
};

export default Cast;

// /movies/get - movie - credits
// запит інформації про акторський склад для сторінки кінофільму.
