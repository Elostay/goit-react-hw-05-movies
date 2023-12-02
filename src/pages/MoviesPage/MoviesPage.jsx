import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovies } from 'helpers/API';

const Movies = () => {
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const [moviesByName, setMoviesByName] = useState([]);

  const location = useLocation();

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setQuery(value);
  };
  const fetchMoviesByName = useCallback(async () => {
    try {
      const moviesRequestByName = await getMovies(
        `search/movie`,
        `&query=${query}`
      );

      setMoviesByName(moviesRequestByName.results);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  //   useEffect(() => {
  //     if (query) {
  //       fetchMoviesByName();
  //     }
  //   }, [fetchMoviesByName, query]);

  useEffect(() => {
    const value = searchParams.get('search');
    if (value) setQuery(value);
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return setSearchParams({});
    setSearchParams({ search: query });
    fetchMoviesByName();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {moviesByName.map(({ id, title }) => (
          <Link key={id} to={`${id}`} state={location}>
            {title}
          </Link>
        ))}
      </div>
    </>
  );
};
export default Movies;
