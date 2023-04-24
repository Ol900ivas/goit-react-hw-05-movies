import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast, imageUrl } from '../../servises/fetch';
import defaultProfilePhoto from '../../images/defaultProfilePhoto.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast();
    async function getCast() {
      const data = await fetchCast(movieId);
      const movieCast = data.map(({ id, name, character, profile_path }) => ({
        id,
        name,
        character,
        profile_path,
      }));
      setCast([...movieCast]);
    }
  }, [movieId]);

  return cast.length !== 0 ? (
    <ul>
      {cast.map(one => (
        <li key={one.id}>
          <img
            src={
              one.profile_path
                ? `${imageUrl}${one.profile_path}`
                : defaultProfilePhoto
            }
            alt={one.name}
            width={100}
          />
          <p>{one.name}</p>
          <p>character:</p>
          <p>{one.character}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Sorry, there's no information about the cast</p>
  );
};

export default Cast;
