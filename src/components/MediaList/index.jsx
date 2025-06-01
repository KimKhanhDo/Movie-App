import { useState } from "react";
import MovieCard from "@components/MovieCard";
import useFetch from "@hooks/useFetch";

function MediaList({ title, tabs }) {
  // const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  const url = tabs.find((tab) => tab.id === activeTabId)?.url;

  const { data } = useFetch({ url });

  const mediaList = (data.results || []).slice(0, 12);

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
        {/* {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            media={media}
            mediaType={media.media_type || activeTabId}
          />
        ))} */}

        {mediaList.map((media) => {
          const enforcedMedia = {
            ...media,
            media_type: media.media_type || activeTabId, // fallback for missing media_type
          };

          return <MovieCard key={media.id} media={enforcedMedia} />;
        })}
      </div>
    </div>
  );
}
export default MediaList;
