import { fetchMovieCastAPI } from '../../helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import oops from '../../img/oops.jpg';
import { ActorName, CastItem, CastList, Img } from './Cast.styled';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const Cast = () => {
  const { movieId } = useParams();
  const [infoCast, setInfoCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const cast = await fetchMovieCastAPI(movieId);

        setInfoCast(cast.cast.slice(0, 12));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <CastList>
      {!isLoading && infoCast.length === 0 && <div>Not found</div>}
      {infoCast.length !== 0 &&
        infoCast.map(el => (
          <CastItem key={el.id}>
            {el.profile_path ? (
              <Img
                width="100"
                height="100"
                src={`${baseUrl}${el.profile_path}`}
                alt="poster"
              />
            ) : (
              <Img width="100" height="100" src={oops} alt="404" />
            )}

            <ActorName>
              {el.name} : {el.character}
            </ActorName>
          </CastItem>
        ))}
    </CastList>
  );
};
export default Cast;
