import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4">
        <img className="w-16 sm:w-28" src="./netflix.png" alt="netflix" />
        <a href="#">Movies</a>
        <a href="#">Dramas</a>
      </div>

      <div>
        <FontAwesomeIcon className="cursor-pointer" icon={faMagnifyingGlass} />
      </div>
    </header>
  );
}
export default Header;
