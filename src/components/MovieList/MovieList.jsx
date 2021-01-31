import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <section
        className="movies card-container"
        style={{
          backgroundImage: `url(images/papyrus-dark.png)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
      >
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
}

export default MovieList;
