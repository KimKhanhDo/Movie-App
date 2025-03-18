import { currencyFormatter } from "@libs/utils";

function MovieInformation({ movieInfo = {} }) {
  const { original_title, origin_country, status, budget, revenue } = movieInfo;

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Title</p>
        <p>{original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <p>
          {(origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              className="mt-1 w-[1.4vw]"
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              alt={countryCode}
            />
          ))}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{currencyFormatter(budget)}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{currencyFormatter(revenue)}</p>
      </div>
    </div>
  );
}
export default MovieInformation;
