import React, { useState, useEffect } from 'react';
import MovieList from './component/MovieList';
import Watchlist from './component/WatchList';
import './styles.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Replace 'your_actual_api_key' with your valid TMDB API key
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=your_actual_api_key')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch movies');
        }
        return res.json();
      })
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const addToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist((prev) => [...prev, movie]);
    }
  };

  return (
    <div className="app">
      <h1>Movie Watchlist</h1>
      <MovieList movies={movies} onAddToWatchlist={addToWatchlist} />
      <Watchlist watchlist={watchlist} />
    </div>
  );
};

export default App;