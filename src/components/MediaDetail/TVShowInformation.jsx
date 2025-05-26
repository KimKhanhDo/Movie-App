function TVShowInformation({ tvInfo = {} }) {
  const { original_name, origin_country, status, networks } = tvInfo;

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{original_name}</p>
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
        <p className="font-bold">Network</p>
        <p>
          {(networks || []).map((network) => (
            <img
              className="invert"
              key={network.id}
              src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
              alt={original_name}
            />
          ))}
        </p>
      </div>
    </div>
  );
}
export default TVShowInformation;
