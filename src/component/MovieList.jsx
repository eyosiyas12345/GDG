import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, onAddToWatchlist }) => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onAddToWatchlist={onAddToWatchlist} />
      ))}
    </div>
  );
};

export default MovieList;