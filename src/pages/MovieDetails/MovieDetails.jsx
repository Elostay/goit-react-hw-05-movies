import { getMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState({});
  const [infoGenres, setInfoGenres] = useState([]);
  const location = useLocation();
  console.log('location', location);
  useEffect(() => {
    const movieInfo = async () => {
      try {
        const description = await getMovies(`movie/${movieId}`);
        console.log('description', description);
        setInfo(description);
        setInfoGenres(description.genres);
      } catch (error) {
        console.log(error);
      }
    };
    movieInfo();
  }, [movieId]);

  return (
    <>
      <Link to={location.state}>Go back</Link>
      <img
        width="100"
        height="100"
        src={`${baseUrl}${info.poster_path}`}
        alt=""
      />
      <h2>{info.title}</h2>
      <p>Overview: {info.overview}</p>
      {infoGenres.map(el => (
        <p key={el.id}>{el.name}</p>
      ))}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
export default MovieDetails;
