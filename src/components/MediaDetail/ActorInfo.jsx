import ImageComponent from "@components/ImageComponent";

function ActorInfo({ actor }) {
  const { profile_path, name, character, episodeCount } = actor;

  return (
    <div className="rounded-lg border border-slate-300 bg-black shadow-sm">
      <ImageComponent
        className="rounded-lg"
        src={
          profile_path
            ? `https://media.themoviedb.org/t/p/w276_and_h350_bestv2${profile_path}`
            : "/ActorNoImage.svg"
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
    </div>
  );
}
export default ActorInfo;
