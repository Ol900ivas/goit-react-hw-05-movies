import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../servises/fetch';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
    async function getReviews() {
      const results = await fetchReviews(movieId);
      setReviews([...results]);
    }
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;

// /movies/get - movie - reviews
// запит оглядів для сторінки кінофільму.
