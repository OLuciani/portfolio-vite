import { useEffect, useState } from "react";
import imagenFotoPerfil from "../assets/foto-perfil.jpeg";
import { Context } from "../context/Context";
import { useContext } from "react";

const Home = () => {
  const { showLanguage, theme } = useContext(Context);
  const [showTransitionInicio, setShowTransitionInicio] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowTransitionInicio(true);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      id="home"
      className="w-full flex flex-col md:flex-row md:flex-wrap justify-evenly items-center gap-8 mb-8 pt-12 md:pt-20"
    >
      <div className="flex flex-col">
        <div className="">
          <p className="text-[salmon] text-2xl md:text-3xl font-semibold mt-2">
            {showLanguage === "spanish" ? "Hola !" : "Hi !"}
          </p>
          <p className="text-[salmon] text-2xl md:text-3xl text-center font-semibold">
            {showLanguage === "spanish" ? "soy" : "I'am"}{" "}
            <span className="text-[salmon] text-xl md:text-3xl font-semibold">
              Oscar Miguel Luciani
            </span>
          </p>

          <p
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } text-lg md:text-2xl text-center font-semibold mt-[3px] ${
              showTransitionInicio ? "inicio-transition" : ""
            }`}
          >
            Frontend Developer
          </p>
        </div>
      </div>

      <img
        src={imagenFotoPerfil}
        alt="Imagen Foto Perfil"
        className="w-32 md:w-40 h-32 md:h-40 rounded-full"
      />
    </div>
  );
};

export default Home;
