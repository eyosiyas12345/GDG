import React from 'react';

const Movie = ({ movie, onAddToWatchlist }) => {
  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={() => onAddToWatchlist(movie)}>Add to Watchlist</button>
    </div>
  );
};

export default Movie;