import FormContact from "./FormContact";

export default function Contact() {

  return (
    <section id="contact" className="section">
      <div className="pb-32">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-8">
          <div className="w-[90%] md:w-[30%]" data-aos="flip-right" data-aos-duration="1500">
            <div>
              <h4 className="text-4xl text-tertiary-color font-extrabold border-b-2 border-b-tertiary-color my-5 md:my-0">
                Entre em contato
              </h4>
            </div>
          </div>
          <FormContact />
        </div>
      </div>
    </section>
  );
}
