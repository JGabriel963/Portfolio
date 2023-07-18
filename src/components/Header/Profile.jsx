import profile from "../../../public/img-profile.png";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

export default function Profile() {
  return (
    <div className="flex flex-col text-center" data-aos="fade-up" data-aos-duration="1500">
      <div className="bg-blur rounded-full mx-auto mb-5 relative main">
        <img src={profile} alt="perfil" width="200px" className="block front" />
      </div>
      <h1 className="font-extrabold text-4xl mb-1 text-blur">João Gabriel</h1>
      <p className="mb-5 text-blur-2">
        I
        <span className="font-semibold text-red-3">
          <Typewriter
            words={[
              "'m Web Developer",
              "'m Mobile Developer",
              " love to play guitar",
              " love watching anime",
              " love One Piece",
            ]}
            loop={true}
            delaySpeed={1000}
            deleteSpeed={70}
          />
        </span>
      </p>
      <div className="flex justify-around text-3xl mb-7 text-blur-2">
        <a
          href="https://instagram.com/joaogabriel9263"
          target="_blank"
          className="hover:scale-150 duration-300 hover:text-yellow"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/JGabriel963"
          target="_blank"
          className="hover:scale-150 duration-300 hover:text-yellow"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/JGabriel963"
          target="_blank"
          className="hover:scale-150 duration-300 hover:text-yellow"
        >
          <BsGithub />
        </a>
      </div>

      <Link
        to="contact"
        smooth={true}
        spy={true}
        className="bg-primary-color py-4 rounded-full font-extrabold text-white hover:bg-red-2 cursor-pointer hover:scale-95 duration-500 transition-all shadow-lg"
      >
        Contact me
      </Link>
    </div>
  );
}
