import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";

function MovieDetail() {
  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 brightness-[.2]"
        src="https://www.sciencefriday.com/wp-content/uploads/2024/06/inside-out-2-promo.jpeg"
        alt=""
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 p-6 py-10 lg:gap-8">
        <div className="flex-1">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
          {/* Content */}
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">Test</p>
          {/* Info */}
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">G</span>
            <p>2021-12-11</p>
            <p>Fantasy, Adventure</p>
          </div>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={100} size={3.5} strokeWidth={0.3} />
              Rating
            </div>
            <button>
              <FontAwesomeIcon className="mr-1" icon={faPlay} />
              Trailer
            </button>
          </div>

          {/* Overview */}
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              unde dicta assumenda obcaecati quasi! Deserunt porro
              exercitationem omnis eligendi quaerat quae consequuntur cupiditate
              voluptatem provident! Distinctio optio repellendus quos nihil.
              Deleniti consectetur unde impedit voluptatibus ducimus dolor non
              aperiam quod magni accusamus rerum corporis similique, vel vero?
              Fugiat, labore adipisci.
            </p>
          </div>

          {/* DirectBy */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div>
              <p className="font-bold">Director</p>
              <p>Jenni</p>
            </div>
            <div>
              <p className="font-bold">Writer</p>
              <p>Jenni</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
