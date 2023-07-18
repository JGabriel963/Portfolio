import profile from "../../../public/img-profile.png";
import Skills from "./Skills";

export default function About() {
  const downloadCv = () => {
    alert("Ainda falta addiconar esta função :(");
  };

  return (
    <section id="about" className="section  md:py-14">
      <h1
        className="text-4xl font-extrabold text-center md:text-start mb-16 border-b-2"
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
        <div className="bg-primary-color rounded-full mx-auto mb-5 relative main">
          <img
            src={profile}
            alt="perfil"
            width="200px"
            className="block front"
          />
        </div>
        <div className="bg-white w-[90%] md:w-[70%] rounded-xl shadow-md p-5">
          <p>
            Olá, eu me chamo{" "}
            <span className="font-extrabold">João Gabriel</span> e já está com
            algum tempo em que eu venho estudando sobre este grande mundo da
            Programação. Depois de meu primeiro "Olá, Mundo", só quis aprender
            mais e mais, evoluindo a cada dia e pesquisando sobre as novidades e
            as ferramentas mais populares e desafiadoras da área. Desejo me
            torna um ótimo{" "}
            <span className="font-extrabold">Desenvolvedor Web</span> e
            colaborar ainda mais com o crescimento desta ecossistema tão
            divertida =D. Atualmento eu venho estudando as tecnologias usada no{" "}
            <span className="font-extrabold">Back-End</span> e, de vez em
            quando, me aventuro no{" "}
            <span className="font-extrabold">Desenvolvimento Mobile</span> com o
            intuito de ser um profissional cada vez mais proativo e possuir um
            olhar mais diversificado. Enfim, espero que acompanhem meu
            desenvolvimento...
          </p>

          <button
            className="mt-8 bg-primary-color hover:bg-red-2 transition-colors py-2 px-4 rounded-full text-white font-extrabold"
            onClick={downloadCv}
          >
            Download CV
          </button>
        </div>
      </div>
      <h1
        className="text-4xl font-extrabold mt-10"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Minhas Habilidades
      </h1>
      <Skills />
    </section>
  );
}
