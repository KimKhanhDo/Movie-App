import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";

function FeatureMovies() {
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: popularMoviesResponse } = useFetch({
    url: "/movie/popular",
  });

  const movies = (popularMoviesResponse.results || []).slice(0, 4);

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

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
