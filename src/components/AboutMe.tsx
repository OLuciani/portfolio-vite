
import { Context } from '../context/Context';
import { useContext } from "react";
import { Button } from "@mui/material";

const AboutMe = () => {
  const { showLanguage, theme } = useContext(Context);

  const cvPathES = "./data/CV (ES)-Oscar Luciani - Frontend.pdf";
  const cvPathEN = "./data/CV (EN)-Oscar Luciani - Frontend Developer.pdf";

  return (
    <section id="about" className="py-6">
      <h2 className='text-center text-[#f06556] text-xl md:text-2xl font-semibold'>
        {showLanguage === "spanish" ? "Sobre mi" : "About me"}
      </h2>
      
      <div className="flex justify-evenly my-6">
        <div className={`md:w-[90vw] text-about-me ${theme === "light" ? "text-black" : "text-white"} m-auto md:text-lg`}>
          {showLanguage === "spanish" ? (
            <>
              <p>
                Mi carrera en el desarrollo web comenzó a principios de 2021, y desde entonces me he comprometido a mantener una formación continua y a explorar nuevas tecnologías. Inicié mi camino como autodidacta en Java y luego profundicé mis conocimientos mediante un Bootcamp intensivo en Full Stack Development (Node.js) en Digital House. A lo largo de mi trayectoria, he trabajado con tecnologías modernas como React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, MySQL y MongoDB, lo que me ha permitido desarrollar un sólido enfoque tanto en frontend como en backend.
              </p>
              <p>
                Uno de mis proyectos más destacados es Comé x menos, una aplicación híbrida que desarrollé de manera independiente. Este proyecto conecta a usuarios con descuentos en restaurantes, bares y comercios gastronómicos. Lo concebí como un desafío personal para profundizar en el desarrollo de aplicaciones grandes y complejas, además de explorar el mundo de las aplicaciones multiplataforma. La app incluye un frontend móvil construido con React Native y Expo, y una plataforma web desarrollada en Next.js. A través de este proyecto, he ganado experiencia práctica en la integración de tecnologías, la gestión de sesiones, la implementación de APIs y la optimización del rendimiento.
              </p>
              <p>
                Mi objetivo es seguir creciendo como desarrollador frontend, aportando soluciones innovadoras y colaborando con equipos que valoren la creatividad y el trabajo en conjunto. Estoy en búsqueda de nuevas oportunidades donde pueda seguir aprendiendo y contribuir con ideas frescas y eficaces a proyectos tecnológicos.
              </p>
            </>
          ) : (
            <>
              <p>
                My web development career began in early 2021, and since then, I have committed to continuous learning and exploring new technologies. I started as a self-taught Java developer and later deepened my knowledge through an intensive Full Stack Development Bootcamp (Node.js) at Digital House. Throughout my journey, I have worked with modern technologies such as React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, MySQL, and MongoDB, allowing me to develop a strong approach in both frontend and backend development.
              </p>
              <p>
                One of my most notable projects is **Comé x menos**, a hybrid app that I developed independently. This project connects users with discounts at restaurants, bars, and other dining establishments. I conceived it as a personal challenge to dive deeper into the development of large and complex applications while exploring the world of cross-platform apps. The app includes a mobile frontend built with React Native and Expo, as well as a web platform developed in Next.js. Through this project, I have gained hands-on experience in technology integration, session management, API implementation, and performance optimization.
              </p>
              <p>
                My goal is to continue growing as a frontend developer, contributing innovative solutions, and collaborating with teams that value creativity and teamwork. I am looking for new opportunities where I can keep learning and contribute fresh and effective ideas to technological projects.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly items-center gap-4">
        {/* Botón para abrir el CV en una nueva pestaña */}
        <a href={showLanguage === "spanish" ? cvPathES : cvPathEN} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="primary" className="w-[260px] h-[36.5px] text-lg font-bold rounded-md" aria-label={showLanguage === "spanish" ? "Ver CV" : "View CV"}>
            {showLanguage === "spanish" ? "Ver CV" : "View CV"}
          </Button>
        </a>

        {/* Botón para descargar el CV */}
        <a href={showLanguage === "spanish" ? cvPathES : cvPathEN} download>
          <Button variant="contained" color="primary" className="w-[260px] h-[36.5px] text-lg font-bold rounded-md" aria-label={showLanguage === "spanish" ? "Descargar CV" : "Download CV"}>
            {showLanguage === "spanish" ? "Descargar CV" : "Download CV"}
          </Button>
        </a>

      </div>
    </section>
  );
};

export default AboutMe;
