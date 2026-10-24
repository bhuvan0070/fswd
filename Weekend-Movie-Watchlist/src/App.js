import { useState } from "react";

const movies = [
  { id: 1, name: "Baahubali", language: "Telugu" },
  { id: 2, name: "Barfi", language: "Hindi" },
  { id: 3, name: "RRR", language: "Telugu" },
  { id: 4, name: "3 Idiots", language: "Hindi" },
  { id: 5, name: "Interstellar", language: "English" },
  { id: 6, name: "Kantara", language: "Kannada" }
];

export default function App() {
  const [watchlist, setWatchlist] = useState([]);

  function toggleMovie(movieId) {
    setWatchlist((current) =>
      current.includes(movieId)
        ? current.filter((id) => id !== movieId)
        : [...current, movieId]
    );
  }

  function clearWatchlist() {
    setWatchlist([]);
  }

  return (
    <main className="app">
      <h1>Weekend movies</h1>

      <section className="watchlist-controls">
        <p>In my watchlist: <strong>{watchlist.length}</strong></p>
        <button className="clear-button" onClick={clearWatchlist}>
          Clear watchlist
        </button>
      </section>

      <section className="movie-grid">
        {movies.map((movie) => {
          const isAdded = watchlist.includes(movie.id);

          return (
            <article className="movie-card" key={movie.id}>
              <h2>{movie.name}</h2>
              <p>{movie.language}</p>
              <button
                className={isAdded ? "movie-button added" : "movie-button"}
                onClick={() => toggleMovie(movie.id)}
              >
                {isAdded ? "Added ✓" : "Add to watchlist"}
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
}
