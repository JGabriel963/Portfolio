import HeaderBar from "./HeaderBar";
import Profile from "./Profile";

export default function Header() {
    return (
        <section
            id='home'
            className='bg-tertiary-color text-white'
        >
            <HeaderBar />
            <div className="h-screen w-full flex justify-center items-center" data-aos="fade-up"  data-aos-duration="1500" >
                <Profile />
            </div>
        </section>
    )
}