import { LuSend } from "react-icons/lu";

export default function Contact() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert("Mensagem Enviada =D");
  };

  return (
    <section id="contact" className="section">
      <div className="pb-96">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-8">
          <div className="w-[90%] md:w-[30%]">
            <div>
              <h4 className="text-4xl text-tertiary-color font-extrabold border-b-2 border-b-tertiary-color my-5 md:my-0">
                Entre em contato
              </h4>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="w-[90%] md:w-[70%]">
            <div className="flex gap-4 flex-col items-center sm:flex-row ">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full text-gray-2 focus:ring-2 focus:ring-tertiary-color focus:outline-none p-4 rounded-full drop-shadow-lg transition-all"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full text-gray-2 focus:ring-2 focus:ring-tertiary-color focus:outline-none p-4 rounded-full drop-shadow-lg transition-all"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Título (Opcional)"
              className="w-full text-gray-2 my-8 drop-shadow-lg rounded-full p-3 focus:ring-2 focus:ring-tertiary-color focus:outline-none transition-all"
            />
            <textarea
              name=""
              placeholder="Digite sua menssagem..."
              id=""
              cols="30"
              rows="8"
              className="w-full text-gray-2 p-4 drop-shadow-lg rounded-3xl focus:ring-2 focus:ring-tertiary-color focus:outline-none transition-all"
            ></textarea>
            <button className="bg-primary-color text-white py-3 px-5 rounded-full font-extrabold flex items-center gap-1 mx-auto md:mx-0 mt-8 hover:bg-red-2 transition-colors">
              Envie uma mensagem
              <LuSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
