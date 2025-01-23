import { LuMapPin } from "react-icons/lu";
import { CiFlag1 } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Context } from "../context/Context";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextareaAutosize from "react-textarea-autosize";
import { Button, CircularProgress } from "@mui/material";

function Contact() {
  const { showLanguage, theme } = useContext(Context);

  const formRef = useRef(null);

  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isSending, setIsSending] = useState(false); // Para manejar el estado de envío
  const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Resetear mensajes de error y éxito
    setEmailError("");
    setMessageError("");
    setSuccessMessage("");
  
    if (formRef.current) {
      const userEmail = (formRef.current as any).user_email.value;
      const message = (formRef.current as any).message.value;
  
      // Validar email
      if (!isValidEmail(userEmail)) {
        setEmailError(
          showLanguage === "spanish"
            ? "Por favor, ingrese un correo electrónico válido."
            : "Please enter a valid email address."
        );
        return;
      }
  
      // Validar mensaje
      if (message.trim() === "") {
        setMessageError(
          showLanguage === "spanish"
            ? "Por favor, ingrese un mensaje."
            : "Please enter a message."
        );
        return;
      }
  
      // Mostrar indicador de carga mientras se envía
      setIsSending(true);
  
      try {
        await emailjs.sendForm(
          "service_j37eijj",
          "template_vm1ovjy",
          formRef.current,
          "jNzEAYIpofHkH56hD"
        );
  
        // Mostrar mensaje de éxito y limpiar campos
        setSuccessMessage(
          showLanguage === "spanish"
            ? "¡Correo enviado con éxito!"
            : "Email sent successfully!"
        );
        setEmailValue("");
        setMessageValue("");
  
        // Configurar temporizador para ocultar el mensaje
        setTimeout(() => {
          setSuccessMessage("");
        }, 8000); // El mensaje desaparecerá después de 5 segundos
      } catch (error) {
        /* console.error(
          "Error al enviar el correo electrónico:",
          error.text
        ); */
      } finally {
        setIsSending(false); // Ocultar el indicador de carga
      }
    }
  };
  

  const isValidEmail = (email: string) => {
    return email.includes("@");
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
        <div className="w-[90%] flex flex-col items-center gap-14 my-5 md:flex-row flex-wrap md:justify-evenly md:items-start">
          {/* Información de contacto */}
          <div className="flex flex-col gap-16">
            {/* Localidad */}
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

            {/* Nacionalidad */}
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

            {/* Email */}
            <div className="flex items-center gap-5">
              <span>
                <MdOutlineAttachEmail className="text-2xl md:text-3xl" />
              </span>
              <p className="md:text-lg">
                <span className="md:text-lg">Email: </span>
                lucianioscar1@gmail.com
              </p>
            </div>

            {/* Teléfono */}
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

            {/* Enlace a cuenta de Linkedin */}
            <div className="w-[130px] hover:underline">
              <a
                className={`flex items-center gap-5 font-semibold ${
                  theme === "light"
                  ? "hover:text-blue-600"
                  : "hover:text-blue-500"
                }`}
                href="https://www.linkedin.com/in/oscarluciani"
                target="_blank"
              >
                <span>
                  <AiOutlineLinkedin
                    className={`text-2xl md:text-3xl cursor-pointer`}
                  />
                </span>
                <p
                  className={`md:text-lg cursor-pointer`}
                >
                  Linkedin
                </p>
              </a>
            </div>

            {/* Enlace a cuenta de Github */}
            <div className="w-[130px] hover:underline">
              <a
                className={`flex items-center gap-5 font-semibold ${
                  theme === "light"
                    ? "hover:text-blue-600"
                    : "hover:text-blue-500"
                }`}
                href="https://github.com/OLuciani"
                target="_blank"
              >
                <span>
                  <FaGithub
                    className={`text-2xl md:text-3xl cursor-pointer`}
                  />
                </span>
                <p
                  className={`md:text-lg cursor-pointer hover:underline`}
                >
                  Github
                </p>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="w-full md:w-[450px] flex flex-row justify-center items-start">
            <div
              className={`w-full border p-4 rounded-xl ${
                theme === "light" ? "border-black" : "border-white"
              }`}
            >
              <h2 className="text-xl text-center pb-4">
                {showLanguage === "spanish"
                  ? "Envía un mensaje"
                  : "Send a message"}
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <label htmlFor="user_email" className="block text-lg mb-2">
                  {showLanguage === "spanish" ? "Tu email:" : "Your email:"}
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className={`w-full mb-4 px-4 py-2 rounded-md border focus:outline-none focus:border-[salmon] ${
                    theme === "light" ? "bg-gray-100 border-gray-400" : "text-black"
                  }`}
                  required
                />
                {emailError && (
                  <p
                    className={`${
                      theme === "light" ? "text-red-500" : "text-[lightsalmon]"
                    } text-sm mt-[-7px] pb-2 text-center`}
                  >
                    {emailError}
                  </p>
                )}

                <label htmlFor="message" className="block text-lg mb-2">
                  {showLanguage === "spanish" ? "Mensaje:" : "Message:"}
                </label>
                <TextareaAutosize
                  id="message"
                  name="message"
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  rows={4}
                  className={`w-full mb-4 px-4 py-2 rounded-md border focus:outline-none focus:border-[salmon] ${
                    theme === "light" ? "bg-gray-100 border-gray-400" : "text-black"
                  }`}
                  required
                />
                {messageError && (
                  <p
                    className={`${
                      theme === "light" ? "text-red-500" : "text-[lightsalmon]"
                    } text-sm mt-[-12px] text-center`}
                  >
                    {messageError}
                  </p>
                )}

                {/* Indicador de envío */}
                {isSending ? (
                  <div className="flex justify-center my-4">
                    <CircularProgress size={24} />
                  </div>
                ) : (
                  <Button
                    type="submit"
                    className="px-6 py-2 mt-5 rounded-md"
                    variant="contained"
                    color="primary"
                  >
                    {showLanguage === "spanish" ? "Enviar" : "Send"}
                  </Button>
                )}
              </form>

              {/* Mensaje de éxito */}
              {successMessage && (
                <p
                  className={`${
                    theme === "light" ? "text-green-600" : "text-green-400"
                  } text-center mt-5`}
                >
                  {successMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

