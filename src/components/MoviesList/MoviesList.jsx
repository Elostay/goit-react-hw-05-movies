import { getMovies } from 'helpers/API';
import { List } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMoviesRequest = await getMovies('trending/all/day');

        setPopularMovies(popularMoviesRequest.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <List>
      {popularMovies.map(movie => (
        <Link to={`movies/${movie.id}`} key={movie.id} state={location}>
          {movie.title ?? movie.name}
        </Link>
      ))}
    </List>
  );
};
