import profile from '../../../public/img-profile.png'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-scroll'


export default function Profile() {
    return (
        <div 
            className='flex flex-col text-center'
        >
            <img src={profile} alt="perfil" width='200px' className='block mx-auto mb-5'/>
            <h1
                className='font-extrabold text-4xl mb-1 text-blur'
            >
                João Gabriel
            </h1>
            <p className='mb-5'>I'm a Front-End Developer</p>
            <div 
                className='flex justify-around text-3xl mb-7'
            >
                <a href="#">
                    <BsInstagram />
                </a>
                <a href="#">
                    <BsLinkedin />
                </a>
                <a href="#">
                    <BsGithub />
                </a>
            </div>

            <Link 
                to='contact'
                smooth={true}
                spy={true}
                className='bg-primary-color py-4 rounded-full font-extrabold text-white hover:bg-red-2 transition-colors cursor-pointer'
            >
                Contact me
            </Link>
        </div>
    )
}