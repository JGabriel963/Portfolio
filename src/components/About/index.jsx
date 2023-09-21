import profile from "../../../public/img-profile.png";
import Skills from "./Skills";

export default function About() {
  const downloadCv = () => {
    alert("Ainda falta addiconar esta função :(");
  };

  return (
    <section id="about" className="section  md:py-14">
      <h1
        className="text-4xl text-tertiary-color font-extrabold text-center md:text-start mb-16 border-b-2"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        Sobre mim
      </h1>
      <div
        className="flex flex-col md:flex-row md:justify-center items-center gap-x-8"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <div className="mx-auto mb-5 w-[200px] h-[200px] cursor-pointer group perspective">
          <div className="relative w-full h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
            <div className="absolute backface-hidden w-full h-full rounded-full border-2 border-tertiary-color">
              <img
                src={profile}
                alt="perfil"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full rounded-full overflow-hidden border-2 border-tertiary-color">
            <img
                src="https://avatars.githubusercontent.com/u/112815316?v=4"
                alt="perfil"
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-[90%] md:w-[70%] rounded-xl shadow-md p-5">
          <p>
            Olá, eu me chamo{" "}
            <span className="font-extrabold text-tertiary-color">João Gabriel</span> e já está com
            algum tempo em que eu venho estudando sobre este grande mundo da
            Programação. Depois de meu primeiro "Olá, Mundo", só quis aprender
            mais e mais, evoluindo a cada dia e pesquisando sobre as novidades e
            as ferramentas mais populares e desafiadoras da área. Desejo me
            torna um ótimo{" "}
            <span className="font-extrabold text-tertiary-color">Desenvolvedor Front-End</span> e
            colaborar ainda mais com o crescimento desta ecossistema tão
            divertida =D. Atualmento eu venho estudando as tecnologias usadas no{" "}
            <span className="font-extrabold text-tertiary-color">Back-End</span> e, de vez em
            quando, me aventuro no{" "}
            <span className="font-extrabold text-tertiary-color">Desenvolvimento Mobile</span> com o
            intuito de ser um profissional cada vez mais proativo e possuir um
            olhar mais diversificado. Acompanhe meu desenvolvimento junto comigo...
          </p>

          
        </div>
      </div>
      <h1
        className="text-4xl text-tertiary-color font-extrabold mt-10"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Minhas Habilidades
      </h1>
      <Skills />
    </section>
  );
}
