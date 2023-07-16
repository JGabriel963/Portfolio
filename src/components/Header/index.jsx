import HeaderBar from "./HeaderBar";
import Profile from "./Profile";

export default function Header() {
    return (
        <section
            id='home'
            className='section bg-tertiary-color text-white'
        >
            <HeaderBar />
            <div className="h-screen w-full  flex justify-center mt-40" data-aos="fade-up"  data-aos-duration="1500" >
                <Profile />
            </div>
        </section>
    )
}