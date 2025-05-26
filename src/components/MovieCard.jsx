import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";
import ImageComponent from "./ImageComponent";

function MovieCard({ media }) {
  const {
    id,
    backdrop_path,
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
    media_type,
  } = media;

  return (
    <Link
      to={media_type === "tv" ? `/tv/${id}` : `/movie/${id}`}
      className="rounded-lg border border-slate-800"
    >
      <div className="relative">
        {media_type === "tv" && (
          <p className="absolute top-1 right-1 rounded bg-black p-1 text-sm font-bold text-white shadow-md">
            TV Show
          </p>
        )}

        <ImageComponent
          className={"w-full rounded-lg"}
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
          width={210}
          height={300}
        />

        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBar
            percent={Math.round(vote_average * 10)}
            strokeColor={
              vote_average >= 7
                ? "green"
                : vote_average >= 5
                  ? "orange"
                  : "yellow"
            }
          />
          <p className="mt-2 font-bold">{title || name}</p>
          <p className="text-slate-300">{release_date || first_air_date}</p>
        </div>
      </div>
    </Link>
  );
}
export default MovieCard;
