import { getMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [infoCast, setInfoCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const cast = await getMovies(`movie/${movieId}/credits`);

        setInfoCast(cast.cast);
      } catch (error) {
        console.log(error);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <>
      {infoCast.length !== 0 ? (
        infoCast.map(el => (
          <div key={el.id}>
            <h2>
              {el.character}: {el.name}
            </h2>
          </div>
        ))
      ) : (
        <div>Not found</div>
      )}
    </>
  );
};
export default Cast;
