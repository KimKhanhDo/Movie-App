import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";

function MovieDetail() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] =
    useState(false);

  //! Fetch detailed info of a movie
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
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  //! Fetch more similar movies based on current movie's id
  useEffect(() => {
    setIsRelatedMovieListLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTY0NTUyODc1ZTExOTM0ZjllM2I2Nzg4YzNkZGRjNSIsIm5iZiI6MTc0MjA4NzY0OC4zMTgsInN1YiI6IjY3ZDYyNWUwMTkxODY4YzU0ZmYxNzM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjqH79JJ_bvTcLGIUR1aRQhOkoIJqBc7_d49qctYNbY",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log({ recommendations: data });

        const currentRelatedMovies = (data.results || []).slice(0, 12);
        setRelatedMovies(currentRelatedMovies);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsRelatedMovieListLoading(false));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(movieInfo);

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-10">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList mediaList={relatedMovies} />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
