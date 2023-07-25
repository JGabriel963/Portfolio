import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export default function Footer() {
  const [heart, setHeart] = useState(false);

  return (
    <div className="flex items-center gap-2 justify-center h-10 text-gray bg-tertiary-color font-extrabold">
      Made with{" "}
      {heart ? (
        <FaHeart
          className="footer__animation"
          onClick={() => setHeart(!heart)}
        />
      ) : (
        <FaRegHeart
          className="footer__animation"
          onClick={() => setHeart(!heart)}
        />
      )}{" "}
      by João Gabriel
    </div>
  );
}
