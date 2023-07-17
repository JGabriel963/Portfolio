import profile from '../../../public/img-profile.png'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-scroll'


export default function Profile() {
    return (
        <div 
            className='flex flex-col text-center'
        >
            <div className='bg-blur rounded-full mx-auto mb-5 relative main'>
                <img src={profile} alt="perfil" width='200px' className='block front'/>   
            </div>
            <h1
                className='font-extrabold text-4xl mb-1 text-blur'
            >
                João Gabriel
            </h1>
            <p className='mb-5'>I'm a Front-End Developer</p>
            <div 
                className='flex justify-around text-3xl mb-7'
            >
                <a href="https://instagram.com/joaogabriel9263" target='_blank' className='hover:scale-125 duration-300'>
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/JGabriel963" target='_blank' className='hover:scale-125 duration-300'>
                    <BsLinkedin />
                </a>
                <a href="https://github.com/JGabriel963" target='_blank' className='hover:scale-125 duration-300'>
                    <BsGithub />
                </a>
            </div>

            
            <Link 
                to='contact'
                smooth={true}
                spy={true}
                className='bg-primary-color py-4 rounded-full font-extrabold text-white hover:bg-red-2 transition-colors cursor-pointer '
            >
                Contact me
            </Link>
        </div>
    )
}