import React from 'react';

const Watchlist = ({ watchlist }) => {
  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty. Start adding some movies!</p>
      ) : (
        <ul>
          {watchlist.map((movie) => (
            <li key={movie.id} className="watchlist-item">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="watchlist-poster"
              />
              <div className="watchlist-details">
                <h3>{movie.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;