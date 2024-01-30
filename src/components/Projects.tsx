import imagenlucianiautomoviles from "../assets/luciani-automoviles.png";
import imagenhernandezcabañas from "../assets/imagen-Hernandez-Cabañas-JVF.jpeg";
import imagennearbytour from "../assets/Imagen-NearByTour1.jpeg";
import imagenMeddyplus from "../assets/Imagen-Meddyplus.jpeg";
import imagenAyudaHumanitaria from "../assets/imagen.humanitarian-aid.jpeg";
import { Context } from '../context/Context';
import { useContext } from "react";

function Projects() {
  const { showLanguage, theme } = useContext(Context);

  return (
    <div className="" id="projects">
      <h2 className='text-center text-[salmon] text-xl md:text-2xl font-semibold my-6'>{showLanguage === "spanish" ? "Mis proyectos" : "My projects"}</h2>

      <div className="flex flex-row flex-wrap justify-center items-center pt-[2%] md:text-lg">
        <div className={`md:w-[450px] pt-[2%] pb-[2%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-[10px] mr-[3%] ml-[3%] mb-[5%]`}>
          <div className="caja-luciani-automoviles">
            <div className="pl-[3%] pr-[3%] mb-[3%] text-left">
              <span className={`${theme === "light" ? "text-black" : "text-white"} mb-[3%]`}>
                <span className="mb-[-25px] font-bold">Ayuda Humanitaria</span>
                <span className="ml-[5px]">({showLanguage === "spanish" ? "Nov/Dic 2023" : "Nov/Dec 2023"}):</span>
                <br />
                {showLanguage === "spanish" ? `Es una aplicación diseñada para gestionar donaciones voluntarias
                en situaciones de desastres naturales, accidentes u otras
                adversidades. Creamos esta aplicación en No Country con la
                colaboración de un grupo de 5 desarrolladores (3 en el Frontend
                y 2 en el Backend), junto con un QA Tester. En mi caso,
                participé en el Frontend.` : `It is an application designed to manage voluntary donations in situations of natural disasters, accidents, or other adversities. We created this application at No Country with the collaboration of a group of 5 developers (3 on the Frontend and 2 on the Backend), along with a QA Tester. In my case, I participated in the Frontend.`}
                <br />
                {showLanguage === "spanish" ? `Herramientas utilizadas: en el frontend se utilizó Next js 13,
                Typescript, Tailwind css y Redux. En el backend se utilizó
                ASp.Net, MVC WebApi, SqlServer y Microsopt Identity. Por último
                el QA Tester utilizó Excel y Jira.` : "Tools used: In the frontend, we used Next.js 13, TypeScript, Tailwind CSS, and Redux. In the backend, we utilized ASP.Net, MVC WebApi, SqlServer, and Microsoft Identity. Finally, the QA Tester used Excel and Jira."}
              </span>
            </div>

            <div className={`grid justify-center items-center mb-[1.5%] ${showLanguage === "spanish" ? 'mt-6' : ""}`}>
              <a href="https://www.youtube.com/watch?v=eUTqOknSewE&list=LL&index=3">
                <p className="w-[260px] bg-gray-300 hover:bg-gray-500 hover:text-white text-lg text-center font-semibold py-1 rounded-md">{showLanguage === "spanish" ? "Video presentación" : "Project Presentation Video"}</p>
              </a>
            </div>

            <div className="pt-[1%] pb-[1%] pl-[3%] pr-[3%]">
              <a href="https://s12-18-tn-csharp-next.vercel.app/">
                <img
                  className={`w-full md:w- ml-[0.1%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-md hover:shadow-md hover:shadow-[salmon] transition duration-300 ease-in-out`}
                  src={imagenAyudaHumanitaria}
                  alt="Imágen NearByTour"
                />
              </a>
            </div>
            <div className="grid justify-center items-center mt-[1.5%]">
              <a href="https://s12-18-tn-csharp-next.vercel.app/">
                <p className="w-[260px] bg-gray-300 hover:bg-gray-500 hover:text-white text-lg text-center font-semibold py-1 rounded-md">{showLanguage === "spanish" ? "Ver App" : "View App"}</p>
              </a>
            </div>
          </div>
        </div>

        <div className={`md:w-[450px] pt-[2%] pb-[2%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-[10px] mr-[3%] ml-[3%] mb-[5%]`}>
          <div className="caja-luciani-automoviles">
            <div className="pl-[3%] pr-[3%] mb-[3%] text-left">
              <span className={`${theme === "light" ? "text-black" : "text-white"} mb-[3%]`}>
                <span className="mb-[-25px] font-bold">NearByTour</span>
                <span className="ml-[5px]">(Oct/Nov 2023):</span>
                <br />
                {showLanguage === "spanish" ? `Es una aplicación versátil que te permite descubrir tesoros
                ocultos y experiencias auténticas en destinos locales de todo el
                mundo, al mismo tiempo que te brinda la posibilidad de
                contribuir tus propios descubrimientos a la comunidad de
                viajeros.` : `It is a versatile application that allows you to discover hidden treasures and authentic experiences in local destinations around the world, while also providing you with the opportunity to contribute your own discoveries to the traveler community.`}
                <br />
                {showLanguage === "english" ? <br /> : null}
                {showLanguage === "spanish" ? `Fue creada en No Coutry por un grupo de 3 Diseñadores UX UI y 8
                Desarrolladrores (6 en el Frontend y 2 en el Backend). Yo
                trabajé en el Frontend.` : `It was created at No Country by a team of 3 UX/UI Designers and 8 developers (6 on the Frontend and 2 on the Backend). I worked on the Frontend.`}
                <br />
                {showLanguage === "spanish" ? `Herramientas utilizadas: En el frontend se utilizó Next js 13,
                Typescript y Tailwind css. En el backend se utilizó Next js,
                Javascript, Firebase, Cloudinary, Postaman y Algolia. Los
                Diseñadores UX UI emplearon Figma.` : `Tools used: In the frontend, we used Next.js 13, TypeScript, and Tailwind CSS. In the backend, we utilized Next.js, JavaScript, Firebase, Cloudinary, Postman, and Algolia. UX/UI Designers used Figma.`}
              </span>
            </div>

            <div className={`grid justify-center items-center mb-[1.5%] ${showLanguage === "english" ? 'mt-8' : ""}`}>
              <a href="https://www.youtube.com/watch?v=Hc3N-QXwT7Q">
                <p className="w-[260px] bg-gray-300 hover:bg-gray-500 hover:text-white text-lg text-center font-semibold py-1 rounded-md">{showLanguage === "spanish" ? "Video presentación" : "Project Presentation Video"}</p>
              </a>
            </div>

            <div className="pt-[1%] pb-[1%] pl-[3%] pr-[3%]">
              <a href="https://nearbytour.vercel.app/home">
                <img
                  className={`w-full md:w- ml-[0.1%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-md hover:shadow-md hover:shadow-[salmon] transition duration-300 ease-in-out`}
                  src={imagennearbytour}
                  alt="Imágen NearByTour"
                />
              </a>
            </div>
            <div className="grid justify-center items-center mt-[1.5%]">
              <a href="https://nearbytour.vercel.app/home">
                <p className="w-[260px] bg-gray-300 hover:bg-gray-500 hover:text-white text-lg text-center font-semibold py-1 rounded-md">{showLanguage === "spanish" ? "Ver App" : "View App"}</p>
              </a>
            </div>
          </div>
        </div>

        <div className={`md:w-[450px] pt-[3%] pb-[2%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-[10px] mr-[3%] ml-[3%] mb-[5%]`}>
          <div className="caja-luciani-automoviles">
            <div className="pl-[3%] pr-[3%] mb-[3%] text-left">
              <span className={`${theme === "light" ? "text-black" : "text-white"} mb-[3%]`}>
                <span className="mb-[-25px] font-bold">Meddyplus</span>
                <span className="ml-[5px]">({showLanguage === "spanish" ? "Ago/Set 2023" : "Aug/Sep 2023"}):</span>
                <br />
                {showLanguage === "spanish" ? `App para una Clínica de Medicina Integral. Permite crear citas
                médicas para atención online, crear historias clínicas online y
                muchas otras funciones. Muy práctica tanto para el paciente como
                para el médico.` : "App for an Integrated Medicine Clinic. It allows scheduling medical appointments for online consultations, creating online medical records, and many other features. Very practical for both the patient and the doctor."}
                <br />
                
                {showLanguage === "spanish" ? `Fue creada en No Coutry por un grupo de Desarrolladrores, 3 en
                el Frontend y 4 en el Backend. Yo trabajé en el Frontend. En el
                Frontend se utilizaron herramientas como Vite, React.js,
                Typescript y Tailwind CSS, proporcionando una base sólida para
                una experiencia de usuario fluida y atractiva. En el Backend, se
                implementaron Node.js, Typescript y SQL para garantizar un
                rendimiento robusto y una gestión eficiente de la base de datos.` : "It was created at No Country by a group of developers, 3 in the Frontend and 4 in the Backend. I worked on the Frontend. In the Frontend, tools such as Vite, React.js, TypeScript, and Tailwind CSS were used, providing a solid foundation for a smooth and engaging user experience. On the Backend, Node.js, TypeScript, and SQL were implemented to ensure robust performance and efficient database management."}
              </span>
            </div>

            <div className="grid justify-center items-center mb-[1.5%]">
              <a href="https://d3ml0dc5hiowr8.cloudfront.net/meddyplus.mp4">
                <p className="w-[260px] bg-gray-300 hover:bg-gray-500 hover:text-white text-lg text-center font-semibold py-1 rounded-md">{showLanguage === "spanish" ? "Video presentación" : "Project Presentation Video"}</p>
              </a>
            </div>

            <div className="pt-[1%] pb-[1%] pl-[3%] pr-[3%]">
              <a href="https://meddyplus.netlify.app">
                <img
                  className={`w-full md:w- ml-[0.1%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-md hover:shadow-md hover:shadow-[salmon] transition duration-300 ease-in-out`}
                  src={imagenMeddyplus}
                  alt="Imágen Meddyplus"
                />
              </a>
            </div>
            <div className="grid justify-center items-center mt-[1.5%]">
              <a href="https://meddyplus.netlify.app">
                <p className="w-[260px] bg-gray-300 hover:bg-gray-500 hover:text-white text-lg text-center font-semibold py-1 rounded-md">{showLanguage === "spanish" ? "Ver App" : "View App"}</p>
              </a>
            </div>
          </div>
        </div>

        <div className={`md:w-[450px] pt-[2%] pb-[2%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-[10px] mr-[3%] ml-[3%] mb-[5%]`}>
          <div className="caja-luciani-automoviles">
            <div className="pl-[3%] pr-[3%] mb-[3%] text-left">
              <span className={`${theme === "light" ? "text-black" : "text-white"} mb-[3%]`}>
                <span className="mb-[-25px] font-bold">Hernandez Cabañas</span>
                <span className="ml-[5px]">({showLanguage === "spanish" ? "Abr/Dic 2023" : "Apr/Dec 2023"}):</span>
                <br />
                {showLanguage === "spanish" ? `Aplicación diseñada para facilitar reservas y alquileres de
                cabañas, ha sido creada con la poderosa combinación de
                tecnologías líderes en la industria, tales como React.js,
                Express.js, Node.js y Mongo DB. Este proyecto, conformado por el
                stack MERN, destaca por su eficiencia y versatilidad.` : `Application designed to streamline cabin reservations and rentals, crafted with the powerful combination of industry-leading technologies such as React.js, Express.js, Node.js, and MongoDB. This MERN stack project stands out for its efficiency and versatility.`}
                <br />
                {showLanguage === "spanish" ? `Se hizo uso de Netlify para el despliegue del frontend y Render
                para el backend. Estas opciones han sido elegidas por su
                confiabilidad, garantizando un rendimiento estable y eficiente
                en todas las áreas de la aplicación. En la gestión de datos,
                Hernandez Cabañas utiliza la robusta plataforma de bases de
                datos Mongo DB Atlas, un entorno seguro y eficiente para
                almacenar y recuperar datos críticos.` : `Netlify was utilized for the frontend deployment, and Render was employed for the backend. These choices were selected for their reliability, ensuring stable and efficient performance across all areas of the application. In data management, Hernandez Cabañas uses the robust Mongo DB Atlas database platform, providing a secure and efficient environment for storing and retrieving critical data.`}
                
              </span>
            </div>

            <div className="pt-[1%] pb-[1%] pl-[3%] pr-[3%]">
              <a href="https://hernandez-cabanas.netlify.app/">
                <img
                  className={`w-full md:w- ml-[0.1%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-md hover:shadow-md hover:shadow-[salmon] transition duration-300 ease-in-out`}
                  src={imagenhernandezcabañas}
                  alt="imagen-hernandez-cabañas"
                />
              </a>
            </div>

            <div className="grid justify-center items-center mt-[1.5%]">
              <a href="https://hernandez-cabanas.netlify.app/">
                <p className="w-[260px] bg-gray-300 hover:bg-gray-500 hover:text-white text-lg text-center font-semibold py-1 rounded-md">{showLanguage === "spanish" ? "Ver App" : "View App"}</p>
              </a>
            </div>
          </div>
        </div>

        <div className={`md:w-[450px] pt-[2%] pb-[2%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-[10px] mr-[3%] ml-[3%] mb-[5%]`}>
          <div className="caja-luciani-automoviles">
            <div className="pl-[3%] pr-[3%] mb-[3%] text-left">
              <span className={`${theme === "light" ? "text-black" : "text-white"} mb-[3%]`}>
                <span className="mb-[-25px] font-bold">Luciani-Automóviles</span>
                <span className="ml-[5px]">(Feb/Mar 2023):</span>
                <br />
                {showLanguage === "spanish" ? `App de consecionaria de automóviles. Crada con React js, Express
                js, Node js y Mongo DB (Mern Stack Project). Para el despliegue
                del frontend, se confía en la eficiencia de Netlify, una
                plataforma reconocida por su facilidad de uso y robustez. En el
                ámbito del backend, la aplicación se apoya en Render, una opción
                confiable que garantiza un rendimiento estable y eficiente. En
                lo que respecta a la gestión de datos, se hace uso de la
                avanzada plataforma de bases de datos MongoDB Atlas. Esta
                elección estratégica permite almacenar y recuperar datos de
                manera segura y eficiente, asegurando la integridad y
                disponibilidad de toda información relevante. Es importante
                señalar que, debido a la elección de un plan gratuito en Render,
                es posible experimentar una demora inicial al solicitar datos al
                backend.` : `Car dealership app created with React.js, Express.js, Node.js, and MongoDB (MERN Stack Project). For the frontend deployment, efficiency is trusted in Netlify, a platform renowned for its user-friendly interface and robustness. In the backend realm, the application relies on Render, a reliable choice ensuring stable and efficient performance. Regarding data management, the advanced MongoDB Atlas database platform is employed. This strategic choice allows for secure and efficient storage and retrieval of data, ensuring the integrity and availability of all relevant information. It's important to note that, due to the selection of a free plan on Render, there might be an initial delay when requesting data from the backend.`}
                
              </span>
            </div>

            <div className="pt-[1%] pb-[1%] pl-[3%] pr-[3%]">
              <a href="https://luciani-automoviles.netlify.app/">
                <img
                  className={`first-letter:w-full md:w- ml-[0.1%] border-[1px] ${theme === "light" ? "border-black" : "border-white"} rounded-md hover:shadow-md hover:shadow-[salmon] transition duration-300 ease-in-out`}
                  src={imagenlucianiautomoviles}
                  alt="imagen-luciani-automoviles"
                />
              </a>
            </div>
            <div className="grid justify-center items-center mt-[1.5%]">
              <a href="https://luciani-automoviles.netlify.app/">
                <p className="w-[260px] bg-gray-300 hover:bg-gray-500 hover:text-white text-lg text-center font-semibold py-1 rounded-md">{showLanguage === "spanish" ? "Ver App" : "View App"}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;