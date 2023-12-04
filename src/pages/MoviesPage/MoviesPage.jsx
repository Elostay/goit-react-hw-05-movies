import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByNameAPI } from 'helpers/API';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [moviesByName, setMoviesByName] = useState([]);

  const fetchMoviesByName = useCallback(async query => {
    try {
      const moviesRequestByName = await fetchMoviesByNameAPI(query);

      setMoviesByName(moviesRequestByName.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const search = searchParams.get('search');
    if (!search) return;
    fetchMoviesByName(search);
  }, [fetchMoviesByName, searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const search = e.target.search.value.trim().toLowerCase();
    if (!search) return;
    setSearchParams({ search });
  };

  return (
    <>
      <form className="flex gap-10 text-xl " onSubmit={handleSubmit}>
        <input className="" type="text" name="search" />
        <button className="bg-sky-500 max-w-xl" type="submit">
          Submit
        </button>
      </form>
      <MoviesList movies={moviesByName} />
    </>
  );
};
export default Movies;
