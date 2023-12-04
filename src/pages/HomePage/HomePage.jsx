import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrendingAPI } from 'helpers/API';
import { useEffect, useState } from 'react';
import { Title } from './HomePage.styled';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMoviesRequest = await fetchTrendingAPI();

        setPopularMovies(popularMoviesRequest.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      <Title>Popular movies</Title>
      {<MoviesList movies={popularMovies} />}
    </>
  );
};
export default Home;
