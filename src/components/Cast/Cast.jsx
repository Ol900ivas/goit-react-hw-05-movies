import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchCast } from '../../servises/api';

const Cast = () => {
  const { movieId } = useParams();
  useEffect(() => {
    getCast();
    async function getCast() {
      const muvieCast = getSearchCast(movieId);
      console.log(muvieCast);
    }
  }, [movieId]);

  return <p>This is the movie cast: {movieId}</p>;
};

export default Cast;

// /movies/get - movie - credits
// запит інформації про акторський склад для сторінки кінофільму.
