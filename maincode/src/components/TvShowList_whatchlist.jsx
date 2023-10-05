import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const TvShowList = () => {
  const [tvShows, setTvShows] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (tvShow) => {
    let tvShowWatchlistArray =
      JSON.parse(localStorage.getItem("tvShowWatchlistArray")) || [];

    const tvShowWithName = {
      id: tvShow.id,
      title: tvShow.name,
      image: `https://image.tmdb.org/t/p/w500${tvShow.image}`, //add image
    };

    tvShowWatchlistArray.push(tvShowWithName);

    localStorage.setItem(
      "tvShowWatchlistArray",
      JSON.stringify(tvShowWatchlistArray)
    );
    setWatchlist([...watchlist, tvShowWithName]);
  };

  const removeFromWatchlist = (tvShow) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== tvShow.id);
    setWatchlist([...updatedWatchlist]);

    // get array of tvshows from LS
    let tvShowWatchlistArray =
      JSON.parse(localStorage.getItem("tvShowWatchlistArray")) || [];

    tvShowWatchlistArray = tvShowWatchlistArray.filter(
      (item) => item.id !== tvShow.id
    );

    // save the new array without the tvshows back in LS
    localStorage.setItem(
      "tvShowWatchlistArray",
      JSON.stringify(tvShowWatchlistArray)
    );
  };

  useEffect(() => {
    const API_KEY = "b2ceb41d1b13c59c04358418f87cecae";
    const BASE_URL = "https://api.themoviedb.org/3";

    fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const tvShowsWithCategory = data.results.map((tvShow) => ({
          ...tvShow,
          category: "TVShows",
        }));
        setTvShows(tvShowsWithCategory);
        console.log(data.results);
      })
      .catch((error) => console.error("Error fetching TV shows:", error));
  }, []);

  return (
    <div>
      <h1>Programas de TV populares</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tvShows.map((tvShow) => (
          <MovieCard
            key={tvShow.id}
            title={tvShow.name}
            overview={tvShow.overview}
            backdrop_path={tvShow.backdrop_path}
            onAddToWatchlist={() => addToWatchlist(tvShow)}
            onRemoveFromWatchlist={() => removeFromWatchlist(tvShow)}
            isAdded={watchlist.some((item) => item.id === tvShow.id)}
            category={tvShow.category}
            id={tvShow.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TvShowList;
