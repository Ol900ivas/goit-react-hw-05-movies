import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../servises/fetch';
import { Name, ReviewItem } from './Reviews.styled';

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
        <ReviewItem key={id}>
          <Name>Author: {author}</Name>
          <p>{content}</p>
        </ReviewItem>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;

// /movies/get - movie - reviews
// запит оглядів для сторінки кінофільму.
