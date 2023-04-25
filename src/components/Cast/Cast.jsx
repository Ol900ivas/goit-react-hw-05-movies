import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast, imageUrl } from '../../servises/fetch';
import defaultProfilePhoto from '../../images/defaultProfilePhoto.png';
import { CastList, CastItem, Name, Par } from './Cast.styled';

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
    <CastList>
      {cast.map(actor => (
        <CastItem key={actor.id}>
          <div>
            <img
              src={
                actor.profile_path
                  ? `${imageUrl}${actor.profile_path}`
                  : defaultProfilePhoto
              }
              alt={actor.name}
              width={100}
              height={150}
            />
            <div>
              <Name>{actor.name}</Name>
              <Par>character:</Par>
              <p>{actor.character}</p>
            </div>
          </div>
        </CastItem>
      ))}
    </CastList>
  ) : (
    <p>Sorry, there's no information about the cast</p>
  );
};

export default Cast;
