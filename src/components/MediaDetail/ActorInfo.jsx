import ImageComponent from "@components/ImageComponent";
import { Link } from "react-router-dom";

function ActorInfo({ actor }) {
  const { id, profile_path, name, character, episodeCount } = actor;

  return (
    <Link
      to={`/people/${id}`}
      className="rounded-lg border border-slate-300 bg-black shadow-sm"
    >
      <ImageComponent
        className="rounded-lg"
        src={
          profile_path &&
          `https://media.themoviedb.org/t/p/w276_and_h350_bestv2${profile_path}`
        }
        alt={name}
        width={276}
        height={350}
      />

      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && (
          <p>
            {episodeCount > 1
              ? `${episodeCount} Episodes`
              : `${episodeCount} Episode`}
          </p>
        )}
      </div>
    </Link>
  );
}
export default ActorInfo;
