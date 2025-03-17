import CircularProgressBar from "./CircularProgressBar";

function MovieCard({ media }) {
  const {
    backdrop_path,
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
    media_type,
  } = media;
  return (
    <div className="relative rounded-lg border border-slate-800">
      {media_type === "tv" && (
        <p className="absolute top-1 right-1 rounded bg-black p-1 text-sm font-bold text-white shadow-md">
          TV Show
        </p>
      )}
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
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
  );
}
export default MovieCard;
