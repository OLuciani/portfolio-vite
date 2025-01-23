import imagenhernandezcabañas from "../assets/imagen-Hernandez-Cabañas-JVF.jpeg";
import imagennearbytour from "../assets/Imagen-NearByTour1.jpeg";
import imagenMeddyplus from "../assets/Imagen-Meddyplus.jpeg";
import imagenComéxMenos from "../assets/Imágen-Comé-x-menos.webp";
import videoDemoComéxMenos from "../assets/Videos/demo-video-Comé-x-menos.mp4";
import { Context } from "../context/Context";
import { useContext, useState } from "react";
import { Button } from "@mui/material";

function Projects() {
  const { showLanguage, theme } = useContext(Context);
  const [showFullContent, setShowFullContent] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="" id="projects">
      <h2 className="text-center text-[salmon] text-xl md:text-2xl font-semibold my-6">
        {showLanguage === "spanish" ? "Mis proyectos" : "My projects"}
      </h2>

      <h4
        className={`text-center text-lg md:text-xl font-bold mt-[1%] ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        {showLanguage === "spanish" ? "Proyecto destacado" : "Featured Project"}
      </h4>

      <div className="flex flex-row flex-wrap justify-center items-center pt-[1%] md:text-lg">
        <div className={`py-[1%]`}>
          <div className="caja-luciani-automoviles">
            <div className="px-[3%] mb-[1%] text-left">
              <span className={`${theme === "light" ? "text-black" : "text-white"} mb-[3%]`}>
                <span className="mb-[-25px] font-bold">Comé x menos</span>
                <span className="ml-[5px]">
                  ({showLanguage === "spanish" ? "May 2024/Ene 2025" : "May 2024/Jan 2025"}):
                </span>
                <br />
                {showLanguage === "spanish" ? (
                  <>
                    {showFullContent ? (
                      <>
                        "Comé x menos" es una aplicación híbrida que conecta a los usuarios con descuentos exclusivos en restaurantes, bares, cafeterías, panaderías y otros establecimientos gastronómicos. Diseñada y desarrollada de forma independiente, esta aplicación no solo representa un ejemplo de mi capacidad técnica, sino también de mi iniciativa, disciplina y compromiso para afrontar proyectos complejos desde su concepción hasta su ejecución.
                        <br />
                        <br />
                        El principal objetivo de "Comé x menos" fue ofrecer una solución práctica y accesible tanto para los consumidores, interesados en ahorrar en sus comidas, como para los negocios, que buscan atraer nuevos clientes y fidelizar a los existentes.
                        <br />
                        <br />
                        Tecnologías utilizadas:
                        <ul>
                          <li>Frontend Móvil: React Native with Expo</li>
                          <li>Frontend Web: Next.js</li>
                          <li>Estilos: Tailwind CSS</li>
                          <li>Backend: Node.js con Express.js</li>
                          <li>Base de datos: MongoDB Atlas</li>
                          <li>Autenticación: Firebase Authentication</li>
                          <li>Otras: Axios, Formik y Yup</li>
                        </ul>
                        <br />
                        Desarrollar "Comé x menos" en solitario fue un desafío inmenso que me permitió crecer tanto profesional como personalmente. Al no contar con un equipo, asumí todos los roles, desde la investigación inicial y la planificación hasta la implementación y el despliegue. Algunos de los retos principales fueron:
                        <ul>
                          <li>Crear una arquitectura escalable que pudiera soportar usuarios en diferentes plataformas.</li>
                          <li>Implementar un sistema de autenticación robusto y seguro.</li>
                          <li>Diseñar una interfaz de usuario intuitiva que fuera atractiva y funcional para usuarios y administradores.</li>
                          <li>Optimizar la aplicación para manejar imágenes de gran tamaño sin afectar el rendimiento.</li>
                        </ul>
                        <br />
                        Actualmente, estoy mostrando solo la aplicación web creada en Next.js. El backend y la aplicación móvil aún se encuentran en desarrollo y no se presentan en esta demo. Están desplegados de manera privada mientras continúo trabajando en su implementación y optimización.
                      </>
                    ) : (
                      <>
                        "Comé x menos" es una aplicación híbrida que conecta a los usuarios con descuentos exclusivos en restaurantes, bares, cafeterías, panaderías y otros establecimientos gastronómicos. Diseñada y desarrollada de forma independiente, esta aplicación no solo representa un ejemplo de mi capacidad técnica, sino también de mi iniciativa, disciplina y compromiso para afrontar proyectos complejos desde su concepción hasta su ejecución.
                        <br />
                        <br />
                        El principal objetivo de "Comé x menos" fue ofrecer una solución práctica y accesible tanto para los consumidores, interesados en ahorrar en sus comidas, como para los negocios, que buscan atraer nuevos clientes y fidelizar a los existentes.
                      </>
                    )}
                    <button
                      onClick={toggleContent}
                      className={`text-blue-500 hover:underline ml-2 ${theme === "light" ? "text-black" : "text-white"}`}
                    >
                      {showFullContent ? "Mostrar menos" : "Mostrar más"}
                    </button>
                  </>
                ) : (
                  <>
                    {showFullContent ? (
                      <>
                        "Comé x menos" is a hybrid application that connects users with exclusive discounts at restaurants, bars, cafes, bakeries, and other food establishments. Designed and developed independently, this application not only represents an example of my technical skills but also my initiative, discipline, and commitment to tackling complex projects from conception to execution.
                        <br />
                        <br />
                        The main goal of "Comé x menos" was to provide a practical and accessible solution both for consumers looking to save on their meals and for businesses seeking to attract new customers and retain existing ones.
                        <br />
                        <br />
                        Technologies used:
                        <ul>
                          <li>Mobile Frontend: React Native with Expo</li>
                          <li>Web Frontend: Next.js</li>
                          <li>Styling: Tailwind CSS</li>
                          <li>Backend: Node.js with Express.js</li>
                          <li>Database: MongoDB Atlas</li>
                          <li>Authentication: Firebase Authentication</li>
                          <li>Others: Axios, Formik, and Yup</li>
                        </ul>
                        <br />
                        Developing "Comé x menos" alone was an immense challenge that allowed me to grow both professionally and personally. Without a team, I took on all roles, from initial research and planning to implementation and deployment. Some of the main challenges were:
                        <ul>
                          <li>Creating a scalable architecture capable of supporting users across different platforms.</li>
                          <li>Implementing a robust and secure authentication system.</li>
                          <li>Designing an intuitive user interface that was both appealing and functional for users and administrators.</li>
                          <li>Optimizing the app to handle large image uploads without impacting performance.</li>
                        </ul>
                        <br />
                        Currently, I am showcasing only the web application built with Next.js. The backend and mobile application are still under development and are not part of this demo. They are privately deployed while I continue working on their implementation and optimization.
                      </>
                    ) : (
                      <>
                        "Comé x menos" is a hybrid application that connects users with exclusive discounts at restaurants, bars, cafes, bakeries, and other food establishments. Designed and developed independently, this application not only represents an example of my technical skills but also my initiative, discipline, and commitment to tackling complex projects from conception to execution.
                        <br />
                        <br />
                        The main goal of "Comé x menos" was to provide a practical and accessible solution both for consumers looking to save on their meals and for businesses seeking to attract new customers and retain existing ones.
                      </>
                    )}
                    <button
                      onClick={toggleContent}
                      className="text-blue-500 hover:underline ml-2"
                    >
                      {showFullContent ? "Show less" : "Show more"}
                    </button>
                  </>
                )}
              </span>
            </div>

            <div className="px-[3%] flex flex-wrap">
              <div className="lg:w-[60%] py-[1%] px-[3%] lg:py-0 md:flex md:justify-center">
                <img
                  className={`w-full md:w-[100%] ml-[0.1%] rounded-md hover:shadow-md hover:shadow-[salmon] transition duration-300 ease-in-out`}
                  src={imagenComéxMenos}
                  alt="Imágen Comé x menos"
                />
              </div>

              <div className="lg:w-[40%] mt-2 flex flex-col items-center justify-center gap-2 lg:gap-3">
                <div className="mb-[1.5%]">
                  <Button
                    onClick={handleOpenModal}
                    className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                    variant="contained"
                    color="primary"
                  >
                    {showLanguage === "spanish" ? "Video presentación" : "Project Presentation Video"}
                  </Button>

                  {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                      <div className="relative w-[90%] max-w-[800px] bg-white rounded-lg overflow-hidden">
                        <video
                          src={videoDemoComéxMenos}
                          controls
                          autoPlay
                          className="w-full h-auto"
                        ></video>
                        <button
                          onClick={handleCloseModal}
                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className=" mt-[1.5%]">
                  <a
                    href="https://discount-project-web.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                      variant="contained"
                      color="primary"
                    >
                      {showLanguage === "spanish" ? "Ver App" : "View App"}
                    </Button>
                  </a>
                </div>
                <div className="px-[3%]">
                   <p>
                    {showLanguage === "spanish"
                      ? `Puedes entrar a la aplicación web creada en Next.js como usuario visitante, utilizando el email ficticio de prueba user_visit@demo.com y la contraseña 12345678 (este usuario tiene el rol que tendría un empleado asociado a la cuenta de un negocio). Puedes crear, editar y eliminar un descuento.`
                      : `You can enter the web application created with Next.js as a guest user, using the test email user_visit@demo.com and the password 12345678 (this user has the role of an employee associated with a business account). You can create, edit, and delete a discount.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4
        className={`pt-[2%] text-center text-lg md:text-xl font-bold ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        {showLanguage === "spanish" ? "Otros Proyectos" : "Other Projects"}
      </h4>

      <div className="flex flex-row flex-wrap justify-center items-center pt-[1%] pb-[2%] md:text-lg">
        <div className={`pt-[1%] pb-[3%]`}>
          <div className="caja-luciani-automoviles">
            <div className="px-[3%] mb-[1%] text-left">
              <span
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } mb-[3%]`}
              >
                <span className="mb-[-25px] font-bold">NearByTour</span>
                <span className="ml-[5px]">(Oct/Nov 2023):</span>
                <br />
                {showLanguage === "spanish"
                  ? `Es una aplicación versátil que te permite descubrir tesoros
                ocultos y experiencias auténticas en destinos locales de todo el
                mundo, al mismo tiempo que te brinda la posibilidad de
                contribuir tus propios descubrimientos a la comunidad de
                viajeros.`
                  : `It is a versatile application that allows you to discover hidden treasures and authentic experiences in local destinations around the world, while also providing you with the opportunity to contribute your own discoveries to the traveler community.`}
                <br />
                {showLanguage === "english" ? <br /> : null}
                {showLanguage === "spanish"
                  ? `Fue creada en No Coutry por un grupo de 3 Diseñadores UX UI y 8
                Desarrolladrores (6 en el Frontend y 2 en el Backend). Yo
                trabajé en el Frontend.`
                  : `It was created at No Country by a team of 3 UX/UI Designers and 8 developers (6 on the Frontend and 2 on the Backend). I worked on the Frontend.`}
                <br />
                {showLanguage === "spanish"
                  ? `Herramientas utilizadas: En el frontend se utilizó Next js 13,
                Typescript y Tailwind css. En el backend se utilizó Next js,
                Javascript, Firebase, Cloudinary, Postman y Algolia. Los
                Diseñadores UX UI emplearon Figma.`
                  : `Tools used: In the frontend, we used Next.js 13, TypeScript, and Tailwind CSS. In the backend, we utilized Next.js, JavaScript, Firebase, Cloudinary, Postman, and Algolia. UX/UI Designers used Figma.`}
              </span>
            </div>

            <div className="px-[3%] flex flex-wrap justify-center">
              <div className="lg:w-1/2 py-[1%] px-[3%] md:py-0 md:flex md:justify-center">
                <img
                  className={`w-full py-[1%] lg:py-0 md:w-[100%] ml-[0.1%] border-[1px] ${
                    theme === "light" && "border-gray-400"
                  } rounded-md hover:shadow-md hover:shadow-[salmon] transition duration-300 ease-in-out`}
                  src={imagennearbytour}
                  alt="Imágen NearByTour"
                />
              </div>

              <div className="lg:w-1/2 mt-2 flex flex-col items-center justify-center gap-2 lg:gap-3">
                <div
                  className={`mb-[1.5%] ${
                    showLanguage === "english" ? "mt-8" : ""
                  }`}
                >
                  <a
                    href="https://www.youtube.com/watch?v=Hc3N-QXwT7Q"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                      variant="contained"
                      color="primary"
                    >
                      {showLanguage === "spanish"
                        ? "Video presentación"
                        : "Project Presentation Video"}
                    </Button>
                  </a>
                </div>

                <div className="mt-[1.5%]">
                  <a
                    href="https://nearbytour.vercel.app/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                      variant="contained"
                      color="primary"
                    >
                      {showLanguage === "spanish" ? "Ver App" : "View App"}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-[1%] pb-[3%]`}>
          <div className="caja-luciani-automoviles">
            <div className="pl-[3%] pr-[3%] mb-[3%] text-left">
              <span
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } mb-[3%]`}
              >
                <span className="mb-[-25px] font-bold">Meddyplus</span>
                <span className="ml-[5px]">
                  (
                  {showLanguage === "spanish" ? "Ago/Set 2023" : "Aug/Sep 2023"}
                  ):
                </span>
                <br />
                {showLanguage === "spanish"
                  ? `App para una Clínica de Medicina Integral. Permite crear citas
                médicas para atención online, crear historias clínicas online y
                muchas otras funciones. Muy práctica tanto para el paciente como
                para el médico.`
                  : "App for an Integrated Medicine Clinic. It allows scheduling medical appointments for online consultations, creating online medical records, and many other features. Very practical for both the patient and the doctor."}
                <br />

                {showLanguage === "spanish"
                  ? `Fue creada en No Coutry por un grupo de Desarrolladrores, 3 en
                el Frontend y 4 en el Backend. Yo trabajé en el Frontend. En el
                Frontend se utilizaron herramientas como Vite, React.js,
                Typescript y Tailwind CSS, proporcionando una base sólida para
                una experiencia de usuario fluida y atractiva. En el Backend, se
                implementaron Node.js, Typescript y SQL para garantizar un
                rendimiento robusto y una gestión eficiente de la base de datos.`
                  : "It was created at No Country by a group of developers, 3 in the Frontend and 4 in the Backend. I worked on the Frontend. In the Frontend, tools such as Vite, React.js, TypeScript, and Tailwind CSS were used, providing a solid foundation for a smooth and engaging user experience. On the Backend, Node.js, TypeScript, and SQL were implemented to ensure robust performance and efficient database management."}
              </span>
            </div>

            <div className="px-[3%] flex flex-wrap justify-center">
              <div className="lg:w-1/2 py-[1%] px-[3%] md:py-0 md:flex md:justify-center">
                <img
                  className={`w-full py-[1%] lg:py-0 md:w-[100%] ml-[0.1%] border-[1px] ${
                    theme === "light" && "border-gray-400"
                  } rounded-md hover:shadow-md hover:shadow-[salmon] transition duration-300 ease-in-out`}
                  src={imagenMeddyplus}
                  alt="Imágen Meddyplus"
                />
              </div>

              <div className="lg:w-1/2 mt-2 flex flex-col items-center justify-center gap-2 lg:gap-3">
                <div className="mb-[1.5%]">
                  <a href="https://d3ml0dc5hiowr8.cloudfront.net/meddyplus.mp4">
                    <Button
                      className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                      variant="contained"
                      color="primary"
                    >
                      {showLanguage === "spanish"
                        ? "Video presentación"
                        : "Project Presentation Video"}
                    </Button>
                  </a>
                </div>

                <div className="mt-[1.5%]">
                  <a
                    href="https://meddyplus.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                      variant="contained"
                      color="primary"
                    >
                      {showLanguage === "spanish" ? "Ver App" : "View App"}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`py-[1%]`}>
          <div className="caja-luciani-automoviles">
            <div className="pl-[3%] pr-[3%] mb-[3%] text-left">
              <span
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } mb-[3%]`}
              >
                <span className="mb-[-25px] font-bold">Hernandez Cabañas</span>
                <span className="ml-[5px]">
                  (
                  {showLanguage === "spanish" ? "Abr/Dic 2023" : "Apr/Dec 2023"}
                  ):
                </span>
                <br />
                {showLanguage === "spanish"
                  ? `Aplicación diseñada para facilitar reservas y alquileres de
                cabañas, ha sido creada con la poderosa combinación de
                tecnologías líderes en la industria, tales como React.js,
                Express.js, Node.js y Mongo DB. Este proyecto, conformado por el
                stack MERN, destaca por su eficiencia y versatilidad.`
                  : `Application designed to streamline cabin reservations and rentals, crafted with the powerful combination of industry-leading technologies such as React.js, Express.js, Node.js, and MongoDB. This MERN stack project stands out for its efficiency and versatility.`}
                <br />
                {showLanguage === "spanish"
                  ? `Se hizo uso de Netlify para el despliegue del frontend y Render
                para el backend. Estas opciones han sido elegidas por su
                confiabilidad, garantizando un rendimiento estable y eficiente
                en todas las áreas de la aplicación. En la gestión de datos,
                Hernandez Cabañas utiliza la robusta plataforma de bases de
                datos Mongo DB Atlas, un entorno seguro y eficiente para
                almacenar y recuperar datos críticos.`
                  : `Netlify was utilized for the frontend deployment, and Render was employed for the backend. These choices were selected for their reliability, ensuring stable and efficient performance across all areas of the application. In data management, Hernandez Cabañas uses the robust Mongo DB Atlas database platform, providing a secure and efficient environment for storing and retrieving critical data.`}
              </span>
            </div>

            <div className="px-[3%] flex flex-wrap justify-center">
              <div className="lg:w-1/2 py-[1%] px-[3%] md:py-0 md:flex md:justify-center">
                <img
                  className={`w-full py-[1%] lg:py-0 md:w-[100%] ml-[0.1%] border-[1px] ${
                    theme === "light" && "border-gray-300"
                  } rounded-md hover:shadow-md hover:shadow-[salmon] transition duration-300 ease-in-out`}
                  src={imagenhernandezcabañas}
                  alt="imagen-hernandez-cabañas"
                />
              </div>
              <div className="lg:w-1/2 mt-2 flex flex-col items-center justify-center gap-2 lg:gap-3">
                <div className="grid justify-center items-center mt-[1.5%]">
                  <a
                    href="https://hernandez-cabanas.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                      variant="contained"
                      color="primary"
                    >
                      {showLanguage === "spanish" ? "Ver App" : "View App"}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
