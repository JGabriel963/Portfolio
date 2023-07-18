import { useState } from "react";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_ijdeieb",
        "template_qpuejw8",
        templateParams,
        "zjB1ALUi-fEbkYydM"
      )
      .then((response) => {
        alert("Email Enviado =D");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] md:w-[70%]"
      data-aos="flip-down"
      data-aos-duration="1500"
    >
      <div className="flex gap-4 flex-col items-center sm:flex-row ">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          className="input"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input"
          required
        />
      </div>
      <input
        type="text"
        placeholder="Título (Opcional)"
        className="w-full text-gray-2 my-8 drop-shadow-lg rounded-full p-3 focus:ring-2 focus:ring-tertiary-color focus:outline-none transition-all"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua menssagem..."
        cols="30"
        rows="8"
        className="w-full text-gray-2 p-4 drop-shadow-lg rounded-3xl focus:ring-2 focus:ring-tertiary-color focus:outline-none transition-all"
      ></textarea>
      <button className="bg-primary-color text-white py-3 px-5 rounded-full font-extrabold flex items-center gap-1 mx-auto md:mx-0 mt-8 hover:bg-red-2 transition-colors">
        Envie uma mensagem
        <LuSend />
      </button>
    </form>
  );
}
