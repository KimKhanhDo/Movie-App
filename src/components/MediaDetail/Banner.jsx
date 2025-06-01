import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";
import CircularProgressBar from "../CircularProgressBar";
import ImageComponent from "@components/ImageComponent";
import { useModalContext } from "@context/ModalProvider";

function Banner({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  genres,
  releaseDate,
  point = 0,
  overview,
  trailerVideoKey,
}) {
  const { openPopUp } = useModalContext();

  if (!title) return null;

  const groupedCrews = groupBy(crews, "job");

  return (
    <div className="relative overflow-hidden bg-black text-white shadow-sm shadow-slate-800">
      <ImageComponent
        width={1200}
        height={800}
        className="absolute inset-0 aspect-video w-full brightness-[.2]"
        src={
          backdropPath && `https://image.tmdb.org/t/p/original${backdropPath}`
        }
        alt={title}
      />

      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <ImageComponent
            src={
              posterPath &&
              `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}`
            }
            alt={title}
            width={600}
            height={900}
          />
        </div>

        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{title}</p>
          {/* Info */}
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map((genre) => genre.name).join(",")}</p>
          </div>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round((point || 0) * 10)}
                size={3.5}
                strokeWidth={0.3}
              />
              Rating
            </div>

            <button
              className="cursor-pointer"
              onClick={() => {
                openPopUp(
                  <iframe
                    className="aspect-video w-[50vw]"
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                  />,
                );
              }}
            >
              <FontAwesomeIcon className="mr-1" icon={faPlay} />
              Trailer
            </button>
          </div>

          {/* Overview */}
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>

          {/* DirectBy */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
