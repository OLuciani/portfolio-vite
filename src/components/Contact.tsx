import { LuMapPin } from "react-icons/lu";
import { CiFlag1 } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Context } from "../context/Context";
import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import TextareaAutosize from "react-textarea-autosize";

function Contact() {
  const { showLanguage, theme } = useContext(Context);

  const formRef = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_j37eijj",
          "template_vm1ovjy",
          formRef.current,
          "jNzEAYIpofHkH56hD"
        )
        .then((result) => {
          console.log("Correo electrónico enviado con éxito:", result.text);
        })
        .catch((error) => {
          console.error("Error al enviar el correo electrónico:", error.text);
        });
    }
  };

  return (
    <div id="contact" className="mb-6 mt-[-3%]">
      <h2 className="text-center text-[salmon] text-xl md:text-2xl font-semibold my-6">
        {showLanguage === "spanish" ? "Contacto" : "Contact"}
      </h2>
      <div
        className={`${
          theme === "light" ? "text-black" : "text-white"
        } flex justify-center items-center`}
      >
        <div className="w-[90%] flex flex-col items-center my-5">
          <div className="flex flex-col gap-16">
            <div className="flex items-center gap-5">
              <span>
                <LuMapPin className="text-2xl md:text-3xl" />
              </span>
              <p className="md:text-lg">
                <span className="md:text-lg">
                  {showLanguage === "spanish" ? "Localidad:" : "Location:"}{" "}
                </span>
                {showLanguage === "spanish"
                  ? `Ciudad de Córdoba - Argentina`
                  : `City of Córdoba - Argentina`}
              </p>
            </div>

            <div className="flex items-center gap-5">
              <span>
                <CiFlag1 className="text-2xl md:text-3xl" />
              </span>
              <p className="md:text-lg">
                <span className="md:text-lg">
                  {showLanguage === "spanish"
                    ? "Nacionalidad:"
                    : "Nationality:"}{" "}
                </span>
                {showLanguage === "spanish"
                  ? "Argentino / Italiano"
                  : "Argentine / Italian"}
              </p>
            </div>

            <div className="flex items-center gap-5">
              <span>
                <MdOutlineAttachEmail className="text-2xl md:text-3xl" />
              </span>
              <p className="md:text-lg">
                <span className="md:text-lg">Email: </span>
                lucianioscar1@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-5">
              <span>
                <BsTelephone className="text-2xl md:text-3xl" />
              </span>
              <p className="md:text-lg">
                <span className="md:text-lg">
                  {showLanguage === "spanish" ? "Teléfono:" : "Phone:"}{" "}
                </span>
                54 9 351 5320693
              </p>
            </div>

            <div className="">
              <a
                className="flex items-center gap-5"
                href="https://www.linkedin.com/in/oscarluciani"
                target="_blank"
              >
                <span>
                  <AiOutlineLinkedin
                    className={`text-2xl md:text-3xl ${
                      theme === "light"
                        ? "hover:text-blue-700"
                        : "hover:text-blue-400"
                    } cursor-pointer`}
                  />
                </span>
                <p
                  className={`md:text-lg ${
                    theme === "light"
                      ? "hover:text-blue-700 font-semibold"
                      : "hover:text-blue-400"
                  } cursor-pointer`}
                >
                  Linkedin
                </p>
              </a>
            </div>

            <div className="">
              <a
                className="flex items-center gap-5"
                href="https://github.com/OLuciani"
                target="_blank"
              >
                <span>
                  <FaGithub
                    className={`text-2xl md:text-3xl ${
                      theme === "light"
                        ? "hover:text-blue-700"
                        : "hover:text-blue-400"
                    } cursor-pointer`}
                  />
                </span>
                <p
                  className={`md:text-lg ${
                    theme === "light"
                      ? "hover:text-blue-700 font-semibold"
                      : "hover:text-blue-400"
                  } cursor-pointer`}
                >
                  Github
                </p>
              </a>
            </div>
          </div>

          <div className="mt-10 md:w-[500px]">
            <h2 className="text-xl text-center py-4">Envia un mensaje</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="user_email" className="block text-lg mb-2">
                Tu email:
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className={`w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[salmon] ${
                  theme === "light" ? "bg-gray-100" : "text-black"
                }`}
                required
              />

              <label htmlFor="message" className="block text-lg mb-2">
                {showLanguage === "spanish" ? "Mensaje:" : "Message:"}
              </label>
              <TextareaAutosize
                id="message"
                name="message"
                rows={4}
                className={`w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[salmon] ${
                  theme === "light" ? "bg-gray-100" : "text-black"
                }`}
                required
              />

              <button
                type="submit"
                className="bg-[salmon] text-white px-6 py-2 rounded-md hover:bg-opacity-80"
              >
                {showLanguage === "spanish" ? "Enviar" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
