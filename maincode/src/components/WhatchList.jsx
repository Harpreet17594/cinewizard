import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  const removeFromWatchlist = (movie) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);
    setWatchlist(updatedWatchlist);

    // Update localStorage here to reflect the film's removal from the watch list
    const movieWatchlistArray =
      JSON.parse(localStorage.getItem("movieWatchlistArray")) || [];

    const updatedMovieWatchlistArray = movieWatchlistArray.filter(
      (item) => item.id !== movie.id
    );

    localStorage.setItem(
      "movieWatchlistArray",
      JSON.stringify(updatedMovieWatchlistArray)
    );
  };

  useEffect(() => {
    // Retrieve watchlist from localStorage and set it to state
    const movieWatchlistArray =
      JSON.parse(localStorage.getItem("movieWatchlistArray")) || [];
    const tvShowsWatchlistArray =
      JSON.parse(localStorage.getItem("tvShowWatchlistArray")) || [];
    setWatchlist([...movieWatchlistArray, ...tvShowsWatchlistArray]);
  }, []);

  return (
    <div>
      <h1>My Watchlist</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {watchlist.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            // You can pass other movie properties if necessary
            onRemoveFromWatchlist={() => removeFromWatchlist(movie)}
            isAdded={true} // Set to true as this is the watch list component
          />
        ))}
      </div>
    </div>
  );
};

export default WatchList;
