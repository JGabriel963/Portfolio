import Card from "./Card";
// Images
import layoutTailwind from "../../../public/layout-t.png";
import call from "../../../public/call.png";
import raffleNumbers from "../../../public/raffle.png";
import importRem from "../../../public/rem.png";
import siteDbv from "../../../public/dbv-site.png";
import ticTacToe from "../../../public/tic-tac.png";

const project = [
  {
    id: 1,
    title: "Layout com Tailwind",
    img: layoutTailwind,
    deploy: "https://jgabriel963.github.io/project-with-tailwindcss/",
    github: "https://github.com/JGabriel963/project-with-tailwindcss",
    description: "Primeiro projeto usado uma das frameworks mais famosas do mercado atualmente, o Tailwind CSS. O projeto simula um site de email, sem nenhuma aplicação mais sofisticada, feito somente para demostrar meus conhecimentos em estilização usando esta tecnologia."
  },
  {
    id: 2,
    title: "Sistema de Chamadas",
    img: call,
    deploy: "https://call-system-three.vercel.app/",
    github: "https://github.com/JGabriel963/call_system",
    description: 'Projeto feito com Firebase e React + Vite para simular sistema de chamadas onde o usuário realiza seu cadastro, cadastra cliente e marca chamadas com o cliente. Para testar, usar "teste@teste.com" como email e "123123" como senha.'
  },
  {
    id: 3,
    title: "Sorteador de Números",
    img: raffleNumbers,
    deploy: "affle-numbers.vercel.app",
    github: "https://github.com/JGabriel963/raffle_numbers",
    description: 'Sistema simples para simular um sorteio. Projeto pessoa que surgiu com a necessidade de um sistema de fácil uso para usar em igrejas e eventos onde desejam realizar algum sorteio baseado em números.'
  },
  {
    id: 4,
    title: "Convertor de Pixels",
    img: importRem,
    deploy: "https://gentle-unicorn-80f606.netlify.app/",
    github: "https://github.com/JGabriel963/Converter_To_Rem",
    description: "Converter pixel para rem nunca foi tão fácil para inicianetes. Aplicação simples para aquelas pessoas que gostariam de sair do padrão 'pixel' e passar a usar 'rem' em suas aplicações."
  },
  {
    id: 5,
    title: "Site para Desbravadores",
    img: siteDbv,
    deploy: "https://desbravadores-website.vercel.app/",
    github: "https://github.com/JGabriel963/desbravadores-website",
    description: 'Sitema criado com muito carinho com o objetivo de ajudar um grupo da Igreja Adventista com seu cadastro de membros no clube de desbravodores - prejeto da igreja que lida com crianças de 10 a 15 anos em atividades físicas, mentais e espirituias. Caso queira testar a aplicação, entre com o email "teste@teste.com" e a senha "123123"'
  },
  {
    id: 6,
    title: "Tic Tac Toe",
    img: ticTacToe,
    deploy: "https://jgabriel963.github.io/Tic_Tac_Toe/",
    github: "https://github.com/JGabriel963/Tic_Tac_Toe",
    description: "Jogo da Velha usando conhecimento puros em HTML, CSS e JS, com o intuito de brincar um pouco com algum colega em momentos livres."
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="section md:mt-0 flex flex-col justify-center"
    >
      <h1
        className="text-3xl text-tertiary-color md:text-4xl font-extrabold mb-20 border-b-2 pb-1"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        Projetos Recentes:
      </h1>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {project.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            img={project.img}
            deploy={project.deploy}
            github={project.github}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}
