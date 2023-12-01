import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovies } from 'helpers/API';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  const [moviesByName, setMoviesByName] = useState([]);
  /*
  
onChange={e =>
            setSearchParams({
              query: e.target.value,
            })
          } */
  const handleSubmit = e => {
    e.preventDefault();
    //  const form = e.currentTarget;
    //  const inputValue = form.elements.search.value.trim().toLowerCase();
    //  console.log('hi');
    //  setSearchParams({ query: inputValue });

    if (movieName === '') return;

    const fetchMoviesByName = async () => {
      try {
        const moviesRequestByName = await getMovies(
          `search/movie`,
          `&query=${movieName}`
        );

        setMoviesByName(moviesRequestByName);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoviesByName();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={movieName ?? ''}
          onChange={e =>
            setSearchParams({
              query: e.target.value,
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {moviesByName.map(movie => (
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        ))}
      </div>
    </>
  );
};
