import { Item, Links, List } from 'pages/HomePage/HomePage.styled';
import { useLocation } from 'react-router-dom';
import oops from '../../img/oops.jpg';
import { Img } from 'components/Cast/Cast.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const baseUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <>
      <List className="text-xl text-whiteMy">
        {movies.map(movie => (
          <Item key={movie.id}>
            <Links to={`/movies/${movie.id}`} key={movie.id} state={location}>
              <>
                {movie.poster_path ? (
                  <Img
                    width="100"
                    height="100"
                    src={`${baseUrl}${movie.poster_path}`}
                    alt="poster"
                  />
                ) : (
                  <Img width="100" height="100" src={oops} alt="404" />
                )}
              </>
              {movie.title ?? movie.name}
            </Links>
          </Item>
        ))}
        {movies.length === 0 && <p>Not found</p>}
      </List>
    </>
  );
};
