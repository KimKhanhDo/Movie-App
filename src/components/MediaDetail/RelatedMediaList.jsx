import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";

function RelatedMediaList({ mediaList = [], isLoading, title }) {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-6">
      <p className="mb-4 text-[1.4vw] font-bold">{title}</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {mediaList.map((media) => (
          <MovieCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
}
export default RelatedMediaList;
