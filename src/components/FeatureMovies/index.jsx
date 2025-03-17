import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

function FeatureMovies() {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTY0NTUyODc1ZTExOTM0ZjllM2I2Nzg4YzNkZGRjNSIsIm5iZiI6MTc0MjA4NzY0OC4zMTgsInN1YiI6IjY3ZDYyNWUwMTkxODY4YzU0ZmYxNzM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjqH79JJ_bvTcLGIUR1aRQhOkoIJqBc7_d49qctYNbY",
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setActiveMovieId(popularMovies[0].id);
      setMovies(popularMovies);
    });
  }, []);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
}
export default FeatureMovies;

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTY0NTUyODc1ZTExOTM0ZjllM2I2Nzg4YzNkZGRjNSIsIm5iZiI6MTc0MjA4NzY0OC4zMTgsInN1YiI6IjY3ZDYyNWUwMTkxODY4YzU0ZmYxNzM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjqH79JJ_bvTcLGIUR1aRQhOkoIJqBc7_d49qctYNbY
