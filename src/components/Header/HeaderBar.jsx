import { CgCodeSlash } from "react-icons/cg";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function HeaderBar() {
  const { nav, setNav } = useContext(UserContext);

  return (
    <header className="flex items-center justify-between px-4 md:px-10 lg:px-44 text-4xl h-14 absolute left-0 right-0 top-0">
      <div>
        <span className="text-primary-color">J</span>
        <span className="text-yellow ">.</span>
        <span className="text-primary-color">G</span>
        <span className="text-blur">.</span>
      </div>
      {!nav ? (
        <BiMenu
          className="text-blur cursor-pointer rounded-md border-2 hover:scale-125 duration-300 transition-all"
          onClick={() => setNav(!nav)}
        />
      ) : (
        <BiMenuAltRight
          className="text-blur cursor-pointer rounded-md border-2 hover:scale-125 duration-300 transition-all"
          onClick={() => setNav(!nav)}
        />
      )}
    </header>
  );
}
