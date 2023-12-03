import { List } from 'pages/HomePage/HomePage.styled';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id} state={location}>
          {movie.title ?? movie.name}
        </Link>
      ))}
    </List>
  );
};
