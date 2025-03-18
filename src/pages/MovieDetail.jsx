import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";

function MovieDetail() {
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTY0NTUyODc1ZTExOTM0ZjllM2I2Nzg4YzNkZGRjNSIsIm5iZiI6MTc0MjA4NzY0OC4zMTgsInN1YiI6IjY3ZDYyNWUwMTkxODY4YzU0ZmYxNzM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjqH79JJ_bvTcLGIUR1aRQhOkoIJqBc7_d49qctYNbY",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
        console.log({ data });
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
    </div>
  );
}
export default MovieDetail;
