import Card from "./Card";
// Images
import layoutTailwind from '../../../public/layout-t.png'
import pedido from '../../../public/pedido.png'
import raffleNumbers from '../../../public/raffle.png'
import importRem from '../../../public/rem.png'
import investimentMore from '../../../public/investir.png'
import ticTacToe from '../../../public/tic-tac.png'


const project = [
    {
        id: 1,
        title: "Layout com Tailwind",
        img: layoutTailwind,
        deploy: "https://jgabriel963.github.io/project-with-tailwindcss/",
        github: "https://github.com/JGabriel963/project-with-tailwindcss",
    },
    {
        id: 1,
        title: "Pedido de Namoro",
        img: pedido,
        deploy: "https://jgabriel963.github.io/Dating_Request/",
        github: "https://github.com/JGabriel963/Dating_Request",
    },
    {
        id: 1,
        title: "Sorteador de Números",
        img: raffleNumbers,
        deploy: "https://raffle-numbers.vercel.app/",
        github: "https://github.com/JGabriel963/raffle_numbers",
    },
    {
        id: 1,
        title: "Convertor de Pixels",
        img: importRem,
        deploy: "https://jgabriel963.github.io/Converter_To_Rem/",
        github: "https://github.com/JGabriel963/Converter_To_Rem",
    },
    {
        id: 1,
        title: "Stock de Investimentos",
        img: investimentMore,
        deploy: "https://jgabriel963.github.io/scrum_ifpi/",
        github: "https://github.com/JGabriel963/scrum_ifpi",
    },
    {
        id: 6,
        title: "Tic Tac Toe",
        img: ticTacToe,
        deploy: "https://jgabriel963.github.io/Tic_Tac_Toe/",
        github: "https://github.com/JGabriel963/Tic_Tac_Toe"
    }
]


export default function Works() {
    return (
        <section id="works" className='section flex flex-col justify-center'>
            <h1 className="text-4xl font-extrabold mb-20">Projetos Recentes:</h1>
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {project.map((project) => (
                    <Card key={project.id} title={project.title} img={project.img} deploy={project.deploy} github={project.github} />
                ))}
            </div>
        </section>
    )
}