import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MediaList() {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTY0NTUyODc1ZTExOTM0ZjllM2I2Nzg4YzNkZGRjNSIsIm5iZiI6MTc0MjA4NzY0OC4zMTgsInN1YiI6IjY3ZDYyNWUwMTkxODY4YzU0ZmYxNzM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjqH79JJ_bvTcLGIUR1aRQhOkoIJqBc7_d49qctYNbY",
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log({ data });

      const trendingMediaList = data.results.slice(0, 12);
      setMediaList(trendingMediaList);
    });
  }, []);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex rounded border border-white">
          <li className="cursor-pointer rounded bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded px-2 py-1">TV Show</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList.map((media) => (
          <MovieCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
}
export default MediaList;
