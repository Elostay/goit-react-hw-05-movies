import { getMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [infoCast, setInfoCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const movieCast = async () => {
      try {
        const cast = await getMovies(`movie/${movieId}/credits`);

        setInfoCast(cast.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <>
      {!isLoading && infoCast.length === 0 && <div>Not found</div>}
      {infoCast.length !== 0 &&
        infoCast.map(el => (
          <div key={el.id}>
            <h2>
              {el.character}: {el.name}
            </h2>
          </div>
        ))}
    </>
  );
};
export default Cast;
