import { getMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState({});
  const [infoGenres, setInfoGenres] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const movieInfo = async () => {
      try {
        const description = await getMovies(`movie/${movieId}`);

        setInfo(description);
        setInfoGenres(description.genres);
      } catch (error) {
        console.log(error);
        navigate('/movies');
      }
    };
    movieInfo();
  }, [movieId, navigate]);

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
      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};
export default MovieDetails;
