import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function NavArrowUp() {
  return (
    <nav className="fixed bottom-2 right-2 md:bottom-8 md:right-4 overflow-hidden z-50  bg-black/20 w-[60px] h-[60px] md:w-[90px] md:h-[90px] backdrop-blur-2xl rounded-2xl flex items-center justify-center text-background text-3xl hover:scale-90 duration-300">
      <Link
        activeClass="bg-none"
        to="home"
        smooth={true}
        spy={true}
        className=""
      >
        <FaArrowUp />
      </Link>
    </nav>
  );
}
