import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrendingAPI } from 'helpers/API';
import { useEffect, useState } from 'react';
import { Title } from './HomePage.styled';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isPosterPath, setIsPosterPath] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMoviesRequest = await fetchTrendingAPI();

        setPopularMovies(popularMoviesRequest.results);
      } catch (error) {
        console.log(error);
      } finally {
        popularMovies.poster_path === null
          ? setIsPosterPath(false)
          : setIsPosterPath(true);
      }
    };
    fetchMovies();
  }, [popularMovies.poster_path]);
  return (
    <>
      <Title>Popular movies</Title>
      {<MoviesList movies={popularMovies} isPosterPath={isPosterPath} />}
    </>
  );
};
export default Home;
