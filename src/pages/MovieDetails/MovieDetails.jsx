import { fetchMovieInfoAPI } from 'helpers/API';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import oops from '../../img/oops.jpg';
import {
  BtnLoadAddInfo,
  BtnLoadAddInfoContainer,
  Container,
  ContainerInfo,
  Genres,
  GenresSpan,
  GoBack,
  Img,
  TitleMovie,
} from './MovieDetails.styled';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState({});
  const [infoGenres, setInfoGenres] = useState([]);
  const [isPosterPath, setIsPosterPath] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = useRef(location);

  useEffect(() => {
    const movieInfo = async () => {
      try {
        const description = await fetchMovieInfoAPI(movieId);

        setInfo(description);
        setInfoGenres(description.genres);
      } catch (error) {
        console.log(error);
        navigate('/movies');
      } finally {
        info.poster_path === null
          ? setIsPosterPath(false)
          : setIsPosterPath(true);
      }
    };
    movieInfo();
  }, [info.poster_path, movieId, navigate]);

  return (
    <>
      <GoBack to={goBack.current.state}>Go back</GoBack>
      <Container>
        {!isPosterPath && <img width="100" height="100" src={oops} alt="404" />}

        {info.poster_path && (
          <Img
            width="100"
            height="100"
            src={`${baseUrl}${info.poster_path}`}
            alt="poster"
          />
        )}

        <ContainerInfo>
          <TitleMovie>{info.title}</TitleMovie>
          <p>Overview: {info.overview}</p>
          <Genres>
            <GenresSpan>Genres:</GenresSpan>
            {infoGenres.map(el => (
              <span key={el.id}>{el.name}</span>
            ))}
          </Genres>
        </ContainerInfo>
      </Container>
      <BtnLoadAddInfoContainer>
        <BtnLoadAddInfo to="cast">Cast</BtnLoadAddInfo>
        <BtnLoadAddInfo to="reviews">Reviews</BtnLoadAddInfo>
      </BtnLoadAddInfoContainer>
      <Outlet />
    </>
  );
};
export default MovieDetails;