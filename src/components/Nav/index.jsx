import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav className="hidden md:block fixed bottom-2 md:bottom-8 w-full overflow-hidden z-50 px-2">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[90px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] rounded-full flex justify-center items-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex rounded-full justify-center  items-center"
          >
            <BiUser />
          </Link>
          <Link
            to="works"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] rounded-full flex justify-center  items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] rounded-full flex justify-center  items-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
}
