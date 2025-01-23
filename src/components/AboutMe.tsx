import { Context } from '../context/Context';
import { useContext } from "react";
import { Button } from "@mui/material";


const AboutMe = () => {
  const { showLanguage, theme } = useContext(Context);

  const cvPathES = "./data/CV (ES)-Oscar Luciani - Frontend.pdf";
  const cvPathEN = "./data/CV (EN)-Oscar Luciani - Frontend Developer.pdf";

  return (
    <div id="about">
      <h2 className='text-center text-[salmon] text-xl md:text-2xl font-semibold'>{showLanguage === "spanish" ? "Sobre mi" : "About me"}</h2>
      <div className="flex justify-evenly my-6">
        <div className={`md:w-[90vw] text-about-me ${theme === "light" ? "text-black" : "text-white"} m-auto md:text-lg`}>
          {showLanguage === "spanish" ? (
            <>
              <p>
                Mi incursión en el Desarrollo Web comenzó a principios de 2021, y desde entonces he mantenido un compromiso constante con el aprendizaje y la innovación tecnológica. Inicié como autodidacta en Java y complementé mi formación con un Bootcamp intensivo de Full Stack Development (Node.js) en Digital House. A lo largo de mi carrera, he adquirido experiencia práctica con tecnologías modernas como React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, MySQL, y MongoDB, entre otras.
              </p>
              <p>
                Uno de mis logros más recientes es 'Comé x menos', una aplicación híbrida que desarrollé de manera independiente. Este proyecto conecta a usuarios con descuentos en restaurantes, bares y otros comercios gastronómicos. Concebí esta idea como un desafío personal, con el objetivo de adquirir experiencia práctica en el desarrollo de una aplicación grande y compleja, que también podría tener potencial de monetización en el futuro. La aplicación incluye un frontend móvil desarrollado en React Native con Expo y una plataforma web construida en Next.js, lo que me permitió enfrentar y superar desafíos técnicos en entornos multiplataforma.
              </p>
              <p>
                Con una trayectoria que comenzó como Full Stack Developer y evolucionó hacia una especialización en Frontend, busco integrarme en equipos que valoren la innovación y el trabajo colaborativo. Mi objetivo es seguir creciendo profesionalmente mientras aporto soluciones creativas y efectivas a los proyectos en los que participo.
              </p>
            </>
          ) : (
            <>
              <p>
                My journey in Web Development began in early 2021, and since then, I have been committed to continuous learning and technological innovation. I started as a self-taught developer exploring Java and later enhanced my skills through an intensive Full Stack Development (Node.js) Bootcamp at Digital House. Throughout my career, I have gained hands-on experience with modern technologies such as React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, MySQL, and MongoDB, among others.
              </p>
              <p>
                One of my most recent achievements is 'Comé x menos,' a hybrid application I developed independently. This project connects users with discounts in restaurants, bars, and other dining establishments. I conceived this idea as a personal challenge to gain practical experience with a large and complex application, while also exploring its potential for monetization in the future. The app features a mobile frontend built with React Native and Expo and a web platform developed with Next.js, enabling me to tackle and solve technical challenges across multiple platforms.
              </p>
              <p>
                With a career path that started as a Full Stack Developer and evolved into a Frontend specialization, I aim to join teams that value innovation and collaboration. My goal is to continue growing professionally while contributing creative and effective solutions to the projects I undertake.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly items-center gap-4">
        {/* Botón para abrir el CV en una nueva pestaña */}
        <a href={showLanguage === "spanish" ? cvPathES : cvPathEN} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="primary" className="w-[149px] h-[36.5px] text-lg font-bold rounded-md">
            {showLanguage === "spanish" ? "Ver CV" : "View CV"}
          </Button>
        </a>

        {/* Botón para descargar el CV */}
        <a href={showLanguage === "spanish" ? cvPathES : cvPathEN} download>
          <Button variant="contained" color="primary" className="w-[149px] h-[36.5px] text-lg font-bold rounded-md">
            {showLanguage === "spanish" ? "Descargar CV" : "Download CV"}
          </Button>
        </a>

      </div>
        
    </div>


  );
};

export default AboutMe;
