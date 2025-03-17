import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MediaList({ title, tabs }) {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;

    if (url) {
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTY0NTUyODc1ZTExOTM0ZjllM2I2Nzg4YzNkZGRjNSIsIm5iZiI6MTc0MjA4NzY0OC4zMTgsInN1YiI6IjY3ZDYyNWUwMTkxODY4YzU0ZmYxNzM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjqH79JJ_bvTcLGIUR1aRQhOkoIJqBc7_d49qctYNbY",
        },
      }).then(async (res) => {
        const data = await res.json();
        const trendingMediaList = data.results.slice(0, 12);
        setMediaList(trendingMediaList);
      });
    }
  }, [activeTabId, tabs]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded px-2 py-1 ${tab.id === activeTabId ? "bg-white text-black" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            media={media}
            mediaType={media.media_type || activeTabId}
          />
        ))}
      </div>
    </div>
  );
}
export default MediaList;
