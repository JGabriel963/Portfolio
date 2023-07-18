import HeaderBar from "./HeaderBar";
import Profile from "./Profile";

export default function Header() {
  return (
    <section id="home" className="text-white">
      <HeaderBar />
      <div className="h-screen w-full flex justify-center items-center">
        <Profile />
      </div>
    </section>
  );
}
