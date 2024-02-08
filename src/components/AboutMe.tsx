import { Context } from '../context/Context';
import { useContext } from "react";

const AboutMe = () => {
  const { showLanguage, theme } = useContext(Context);

  return (
    <div id="about">
        <h2 className='text-center text-[salmon] text-xl md:text-2xl font-semibold'>{showLanguage === "spanish" ? "Sobre mi" : "About me"}</h2>

        <div className="flex justify-evenly my-6">
          <p className={`md:w-[90vw] text-about-me ${theme === "light" ? "text-black" : "text-white"} m-auto md:text-lg`}>
          {showLanguage === "spanish" 
          ? `Di mis primeros pasos en el mundo del Desarrollo Web en enero del año 2021. Comencé como autodidacta en Java y más tarde completé un Bootcamp
          de Full Stack Developer (Node.js) en Digital House. Desde entonces y hasta el día de hoy me he seguido capacitado con
          entusiasmo en herramientas como React.js, Next.js, Typescript,
          Javascript, HTML, CSS, Tailwind CSS, Vite js, MySQL y MongoDB entre
          otras.
          Mi trayectoria comenzó como Full Stack Developer, pero evolucionó
          hacia un enfoque especializado en el Frontend. Actualmente, colaboro en
          emulaciones de proyectos reales con equipos multidisciplinarios en No
          Country trabajando junto a Backend Developers, UX/UI Designers, TL, PM,
          y otros. Mis participaciones en los proyectos de No Country han sido verdaderamente fructíferas, ya que me han ayudado a desarrollar y mejorar tanto habilidades blandas como técnicas, y también a sumar experiencia en el trabajo en equipo. Siempre en busca de nuevas oportunidades de crecimiento y
          desarrollo profesional, mi objetivo es contribuir en un entorno que
          valore mis habilidades y estimule mi continuo progreso en la carrera.` 
          : `I've been immersed in the fascinating world of Web Development since early 2021. I kicked off as a self-taught enthusiast in Java and later completed a Full Stack Developer (Node.js) Bootcamp at Digital House. I've eagerly trained in tools like React.js, Next.js, Typescript, Javascript, HTML, CSS, Tailwind CSS, Vite js, MySQL, and MongoDB, among others.

          While I began my journey as a Full Stack Developer, it evolved towards a specialized focus on the Frontend. Currently, I collaborate on real project simulations with multidisciplinary teams at No Country, working alongside Backend Developers, UX/UI Designers, TL, PM, and others.
          
          Always on the lookout for new opportunities for growth and professional development, my goal is to contribute to an environment that values my skills and fosters my ongoing career progress. Let's connect and explore the possibilities!`
          }
            
          </p>
        </div>

        {
          showLanguage === "spanish"
          ? <div className="grid justify-center">
              <a href="./data/CV (ES)-Oscar Luciani - Frontend.pdf" download><button className={`${theme === "light" ? "bg-black hover:bg-gray-600 text-white" : "bg-gray-300 hover:bg-gray-500"} text-lg hover:text-white font-bold px-8 rounded-md`}>{showLanguage === "spanish" ? "Descargar CV" : "Download CV"}</button></a>
            </div>
          : <div className="grid justify-center">
              <a href="./data/CV (EN)-Oscar Luciani - Frontend Developer.pdf" download><button className={`${theme === "light" ? "bg-black hover:bg-gray-600 text-white" : "bg-gray-300 hover:bg-gray-500"} text-lg hover:text-white font-bold px-8 rounded-md`}>{showLanguage === "spanish" ? "Descargar CV" : "Download CV"}</button></a>
            </div>
        }
        
    </div>


  );
};

export default AboutMe;
