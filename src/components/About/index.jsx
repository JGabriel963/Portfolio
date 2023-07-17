import profile from '../../../public/img-profile.png'
import Skills from './Skills'

export default function About() {
    return (
        <section id="about" className='section  md:py-14'>
            <h1 
                className="text-4xl font-extrabold text-center md:text-start mb-16 border-b-2"
            >
                Sobre mim
            </h1>
            <div className='flex flex-col md:flex-row md:justify-center items-center gap-x-8'>
                <div 
                    className='bg-primary-color rounded-full mx-auto mb-5 relative main'
                >
                    <img src={profile} alt="perfil" width='200px' className='block front'/>   
                </div>
                <div 
                    className='bg-white w-[90%] md:w-[70%] rounded-xl shadow-md p-5'
                >
                    <p>Olá, eu me chamo <span className='font-extrabold'>João Gabriel</span> e há algum  tempo eu venho estudando sobre este grande mundo da Programação. Depois de meu primeiro "Olá, Mundo", só quis aprender mais e mais, evoluindo a cada dia. Desejo me torna um ótimo <span className='font-extrabold'>Desenvolvedor Web</span> e colaborar ainda mais com o crescimento desta área tão divertida =D Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, laudantium adipisci consectetur impedit commodi cum nemo quae nesciunt, minus soluta enim debitis doloremque harum unde eligendi sit error sequi pariatur.</p>

                    <button className='mt-8 bg-primary-color hover:bg-red-2 transition-colors py-2 px-4 rounded-full text-white font-extrabold'>
                        Download CV
                    </button>
                </div>
            </div>
            <h1 
                className='text-4xl font-extrabold mt-10'
            >
                Minhas Habilidades
            </h1>
            <Skills />
        </section>
    )
}