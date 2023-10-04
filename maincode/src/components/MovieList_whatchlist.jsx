import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    let movieWatchlistArray =
      JSON.parse(localStorage.getItem("movieWatchlistArray")) || [];

    const movieWithTitle = {
      id: movie.id,
      title: movie.title,
      image: `https://image.tmdb.org/t/p/w500${movie.image}`, //add image
    };

    movieWatchlistArray.push(movieWithTitle);

    localStorage.setItem(
      "movieWatchlistArray",
      JSON.stringify(movieWatchlistArray)
    );
    setWatchlist([...watchlist, movieWithTitle]);
  };

  const removeFromWatchlist = (movie) => {
    console.log(movie.id);
    const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);
    setWatchlist(updatedWatchlist);

    // get array of movies from LS
    let movieWatchlistArray =
      JSON.parse(localStorage.getItem("movieWatchlistArray")) || [];

    movieWatchlistArray = movieWatchlistArray.filter(
      (item) => item.id !== movie.id
    );

    // save the new array without the movie back in LS
    localStorage.setItem(
      "movieWatchlistArray",
      JSON.stringify(movieWatchlistArray)
    );
  };

  useEffect(() => {
    const API_KEY = "b2ceb41d1b13c59c04358418f87cecae";
    const BASE_URL = "https://api.themoviedb.org/3";

    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const moviesWithCategory = data.results.map((movie) => ({
          ...movie,
          category: "Movies",
        }));
        setMovies(moviesWithCategory);
        console.log(data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            backdrop_path={movie.backdrop_path}
            onAddToWatchlist={() => addToWatchlist(movie)}
            onRemoveFromWatchlist={() => removeFromWatchlist(movie)}
            isAdded={watchlist.some((item) => item.id === movie.id)}
            category={movie.category}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
