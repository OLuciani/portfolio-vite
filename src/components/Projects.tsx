//import imagenhernandezcabañas from "../assets/imagen-Hernandez-Cabañas-JVF.jpeg";
import imagennearbytour from "../assets/Imagen-NearByTour1.jpeg";
import imagenMeddyplus from "../assets/Imagen-Meddyplus.jpeg";
import imagenComéxMenos from "../assets/imágen-Comé-x-menos.webp";
import imageComéxMenosMobileApp from "../assets/image-Comé-x-menos-Mobile-App.webp";
import videoDemoComéxMenosWeb from "/assets/videos/demo-video-comé-x-menos-Web.mp4";
import videoComéxMenosMobile from "/assets/videos/Video-Comé-x-menos-Mobile.mp4";
import { Context } from "../context/Context";
import { useContext, useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";

function Projects() {
  const { showLanguage, theme } = useContext(Context);
  const [showFullContent, setShowFullContent] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMobileVideo, setShowMobileVideo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement === videoRef.current) {
        setIsFullscreen(true);
      } else {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenMobileVideoModal = () => {
    setShowMobileVideo(true);
  };

  const handleCloseMobileVideoModal = () => {
    setShowMobileVideo(false);
  };

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="" id="projects">
      <h2 className="text-center text-[#f06556] text-xl md:text-2xl font-semibold my-6">
        {showLanguage === "spanish" ? "Mis proyectos" : "My projects"}
      </h2>

      <h4
        className={`text-center text-lg md:text-xl font-bold mt-[1%] ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        {showLanguage === "spanish" ? "Proyecto Destacado" : "Featured Project"}
      </h4>

      <div className="flex flex-row flex-wrap justify-center items-center pt-[1%] md:text-lg">
        <div className="py-[1%]">
          <div className="caja-luciani-automoviles">
            <div className="px-[3%] mb-[1%] text-left">
              <span
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } mb-[3%]`}
              >
                <span className="font-bold">Comé x menos</span>
                <span className="ml-[5px]">
                  (
                  {showLanguage === "spanish"
                    ? "Jun 2024/Ene 2025"
                    : "May 2024/Jan 2025"}
                  ):
                </span>
                <br />
                {showLanguage === "spanish" ? (
                  <>
                    {showFullContent ? (
                      <>
                        <p className="mb-4">
                          "Comé x menos" es una aplicación híbrida que conecta a
                          los usuarios con descuentos exclusivos en
                          restaurantes, bares, cafeterías, panaderías y otros
                          establecimientos gastronómicos. A diferencia de
                          plataformas como PedidosYa o Rappi, que se centran en
                          el delivery, el objetivo de "Comé x menos" es fomentar
                          el consumo directo en los locales o la modalidad de
                          "takeaway" para aprovechar los descuentos.
                        </p>

                        <p className="mb-4 font-bold">
                          La app está compuesta por dos plataformas:
                        </p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            <strong>Aplicación web:</strong> para dueños y
                            administradores de negocios, quienes pueden publicar
                            y gestionar descuentos.
                          </li>
                          <li>
                            <strong>Aplicación móvil:</strong> para los usuarios
                            que buscan descuentos y generan códigos QR para
                            canjear en los locales.
                          </li>
                          <li>
                            <strong>Escáner QR:</strong> los administradores de
                            los negocios pueden validar los descuentos mediante
                            un escáner integrado en la app móvil.
                          </li>
                        </ul>

                        <p className="mb-4">
                          Ambas versiones comparten el mismo backend, que creé
                          con Node.js y Express, asegurando sincronización en
                          tiempo real. Para la base de datos, utilicé MongoDB
                          Atlas.
                        </p>

                        <p className="mb-4 font-bold">
                          🚀 Retos resueltos en el desarrollo
                        </p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            ✅ <strong>Autenticación segura:</strong> Integré
                            Firebase Authentication con sesiones protegidas
                            mediante JWT y cookies.
                          </li>
                          <li>
                            ✅ <strong>Sincronización en tiempo real:</strong>{" "}
                            Aseguré que los descuentos creados en la web se
                            reflejen de inmediato en la app móvil.
                          </li>
                          <li>
                            ✅{" "}
                            <strong>Experiencia híbrida (web y móvil):</strong>{" "}
                            Diseñé una arquitectura que funciona sin fricciones
                            en ambas plataformas.
                          </li>
                          <li>
                            ✅ <strong>Optimización de imágenes:</strong>{" "}
                            Implementé un sistema de compresión para mejorar el
                            rendimiento sin perder calidad.
                          </li>
                          <li>
                            ✅ <strong>Validación de descuentos con QR:</strong>{" "}
                            Creé un sistema de escaneo para asegurar que los
                            descuentos sean legítimos.
                          </li>
                          <li>
                            ✅ <strong>Despliegue eficiente:</strong> Optimizé
                            tiempos de carga en la nube para mejorar el
                            rendimiento.
                          </li>
                        </ul>

                        <p className="mb-4 font-bold">📌 Próximos pasos:</p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            🔹 Integrar una pasarela de pago con Mercado Pago
                            para permitir pagos dentro de la app.
                          </li>
                          <li>
                            🔹 Agregar filtros avanzados y una opción para
                            marcar favoritos.
                          </li>
                          <li>
                            🔹 Incluir una sección con los negocios más
                            recientes.
                          </li>
                        </ul>

                        <p className="mb-4 font-bold">
                          🛠️ Tecnologías utilizadas
                        </p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>Frontend Web: Next.js + Tailwind CSS</li>
                          <li>Frontend Móvil: React Native con Expo</li>
                          <li>Backend: Node.js con Express.js</li>
                          <li>Base de datos: MongoDB Atlas</li>
                          <li>Autenticación: Firebase Authentication</li>
                          <li>Otras herramientas: Axios, Formik, Yup</li>
                        </ul>

                        <p className="mb-2">
                          📂 El código fuente del frontend web y del backend de "Comé x menos"
                          está disponible públicamente en GitHub.
                        </p>

                        <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-4 py-2">
                          <Button
                            className="w-[325px] text-center font-semibold py-1 rounded-md"
                            variant="contained"
                            color="primary"
                          >
                            <a
                              href="https://github.com/OLuciani/discount-project-web"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver repositorio del frontend web
                            </a>
                          </Button>

                          <Button
                            className="w-[325px] text-center font-semibold py-1 rounded-md"
                            variant="contained"
                            color="primary"
                          >
                            <a
                              href="https://github.com/OLuciani/discount-project-backend"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver repositorio del backend
                            </a>
                          </Button>
                        </div>

                        <p className="mb-2">
                          🔒 El repositorio de la aplicación móvil se mantiene privado para facilitar su evolución y desarrollo futuro.
                        </p>
                        <p className="mb-2">
                          🎥 Puedes ver demostraciones en video de la aplicación
                          web y móvil funcionando.
                        </p>
                        <p>
                          💡 En entrevistas técnicas, puedo compartir fragmentos
                          de código relevantes y explicar en detalle la
                          arquitectura y las tecnologías utilizadas.
                          <button
                            onClick={toggleContent}
                            className={`ml-2 mt-2 hover:underline ${
                              theme === "light"
                                ? "text-blue-500"
                                : "text-blue-400"
                            }`}
                            aria-label={
                              showFullContent
                                ? "Mostrar menos contenido"
                                : "Mostrar más contenido"
                            }
                          >
                            {showFullContent
                              ? "Mostrar menos..."
                              : "Mostrar más..."}
                          </button>
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="mb-4">
                          "Comé x menos" es una aplicación híbrida que conecta a
                          los usuarios con descuentos exclusivos en
                          restaurantes, bares, cafeterías, panaderías y otros
                          establecimientos gastronómicos. A diferencia de
                          plataformas como PedidosYa o Rappi, que se centran en
                          el delivery, el objetivo de "Comé x menos" es fomentar
                          el consumo directo en los locales o la modalidad de
                          "takeaway" para aprovechar los descuentos.
                        </p>

                        <p className="mb-4 font-bold">
                          La app está compuesta por dos plataformas:
                        </p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            <strong>Aplicación web:</strong> para dueños y
                            administradores de negocios, quienes pueden publicar
                            y gestionar descuentos.
                          </li>
                          <li>
                            <strong>Aplicación móvil:</strong> para los usuarios
                            que buscan descuentos y generan códigos QR para
                            canjear en los locales.
                          </li>
                          <li>
                            <strong>Escáner QR:</strong> los administradores de
                            los negocios pueden validar los descuentos mediante
                            un escáner integrado en la app móvil.
                          </li>
                        </ul>

                        <p className="mb-4">
                          Ambas versiones comparten el mismo backend, que creé
                          con Node.js y Express, asegurando sincronización en
                          tiempo real. Para la base de datos, utilicé MongoDB
                          Atlas.
                        </p>

                        <p className="mb-4 font-bold">
                          🚀 Retos resueltos en el desarrollo
                        </p>

                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            ✅ <strong>Autenticación segura:</strong> Integré
                            Firebase Authentication con sesiones protegidas
                            mediante JWT y cookies.
                          </li>
                          <li>
                            ✅ <strong>Sincronización en tiempo real:</strong>{" "}
                            Aseguré que los descuentos creados en la web se
                            reflejen de inmediato en la app móvil.
                          </li>
                          <li>
                            ✅{" "}
                            <strong>Experiencia híbrida (web y móvil):</strong>{" "}
                            Diseñé una arquitectura que funciona sin fricciones
                            en ambas plataformas.
                          </li>
                          <li>
                            ✅ <strong>Optimización de imágenes:</strong>{" "}
                            Implementé un sistema de compresión para mejorar el
                            rendimiento sin perder calidad.
                          </li>
                          <li>
                            ✅ <strong>Validación de descuentos con QR:</strong>{" "}
                            Creé un sistema de escaneo para asegurar que los
                            descuentos sean legítimos.
                          </li>
                          <li>
                            ✅ <strong>Despliegue eficiente:</strong> Optimizé
                            tiempos de carga en la nube para mejorar el
                            rendimiento.
                            <button
                              onClick={toggleContent}
                              className={`ml-2 hover:underline ${
                                theme === "light"
                                  ? "text-blue-500"
                                  : "text-blue-400"
                              }`}
                              aria-label={
                                showFullContent
                                  ? "Mostrar menos contenido"
                                  : "Mostrar más contenido"
                              }
                            >
                              {showFullContent
                                ? "Mostrar menos..."
                                : "Mostrar más..."}
                            </button>
                          </li>
                        </ul>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {showFullContent ? (
                      <>
                        {/* <p className="mb-4 font-bold">Comé x menos (May 2024 - Feb 2025)</p> */}
                        <p className="mb-4">
                          "Comé x menos" is a hybrid application that connects
                          users with exclusive discounts at restaurants, bars,
                          cafés, bakeries, and other food establishments. Unlike
                          platforms like PedidosYa or Rappi, which focus on
                          delivery, the goal of "Comé x menos" is to encourage
                          in-store dining or takeaway to take advantage of
                          discounts.
                        </p>

                        <p className="mb-4 font-bold">
                          The app consists of two platforms:
                        </p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            <strong>Web application:</strong> For business
                            owners and administrators to publish and manage
                            discounts.
                          </li>
                          <li>
                            <strong>Mobile application:</strong> For users to
                            browse discounts and generate QR codes to redeem
                            them in stores.
                          </li>
                          <li>
                            <strong>QR scanner:</strong> Business administrators
                            can validate discounts using an integrated scanner
                            in the mobile app.
                          </li>
                        </ul>

                        <p className="mb-4">
                          Both versions share the same backend, which I built
                          with Node.js and Express, ensuring real-time
                          synchronization. For the database, I used MongoDB
                          Atlas.
                        </p>

                        <p className="mb-4 font-bold">
                          🚀 Development challenges solved
                        </p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            ✅ <strong>Secure authentication:</strong>{" "}
                            Integrated Firebase Authentication with session
                            protection using JWT and cookies.
                          </li>
                          <li>
                            ✅ <strong>Real-time synchronization:</strong>{" "}
                            Ensured that discounts created on the web instantly
                            reflect in the mobile app.
                          </li>
                          <li>
                            ✅{" "}
                            <strong>Hybrid experience (web & mobile):</strong>{" "}
                            Designed an architecture that works seamlessly on
                            both platforms.
                          </li>
                          <li>
                            ✅ <strong>Image optimization:</strong> Implemented
                            a compression system to enhance performance without
                            losing quality.
                          </li>
                          <li>
                            ✅ <strong>QR discount validation:</strong>{" "}
                            Developed a scanning system to ensure discounts are
                            legitimate.
                          </li>
                          <li>
                            ✅ <strong>Efficient deployment:</strong> Optimized
                            cloud load times for better performance.
                          </li>
                        </ul>

                        <p className="mb-4 font-bold">📌 Next steps:</p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            🔹 Integrate a payment gateway with Mercado Pago to
                            enable in-app transactions.
                          </li>
                          <li>
                            🔹 Add advanced filters and a favorite-marking
                            feature.
                          </li>
                          <li>
                            🔹 Include a section showcasing the newest
                            businesses.
                          </li>
                        </ul>

                        <p className="mb-4 font-bold">🛠️ Technologies used</p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>Frontend Web: Next.js + Tailwind CSS</li>
                          <li>Mobile Frontend: React Native with Expo</li>
                          <li>Backend: Node.js with Express.js</li>
                          <li>Database: MongoDB Atlas</li>
                          <li>Authentication: Firebase Authentication</li>
                          <li>Other tools: Axios, Formik, Yup</li>
                        </ul>

                        <p className="mb-2">
                         📂 The source code for the web frontend and backend of 'Comé x menos' is publicly available on GitHub.
                        </p>

                        <div className="flex flex-col items-center md:flex-row md:justify-evenly gap-4 py-2">
                          <Button
                            className="w-[325px] text-center font-semibold py-1 rounded-md"
                            variant="contained"
                            color="primary"
                          >
                            <a
                              href="https://github.com/OLuciani/discount-project-web"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Web Frontend Repository
                            </a>
                          </Button>

                          <Button
                            className="w-[325px] text-center font-semibold py-1 rounded-md"
                            variant="contained"
                            color="primary"
                          >
                            <a
                              href="https://github.com/OLuciani/discount-project-backend"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Backend Repository
                            </a>
                          </Button>
                        </div>

                        <p className="mb-2">
                          🔒 The mobile app repository is kept private to support its future evolution and ongoing development.
                        </p>

                        <p className="mb-2">
                          🎥 You can watch video demos of the web and mobile
                          applications in action.
                        </p>
                        <p>
                          💡 In technical interviews, I can share relevant code
                          snippets and explain the architecture and technologies
                          used in detail.
                          <button
                            onClick={toggleContent}
                            className={`ml-2 mt-2 hover:underline ${
                              theme === "light"
                                ? "text-blue-500"
                                : "text-blue-400"
                            }`}
                            aria-label={
                              showFullContent
                                ? "Show less content"
                                : "Show more content"
                            }
                          >
                            {showFullContent ? "Show less..." : "Show more..."}
                          </button>
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="mb-4">
                          "Comé x menos" is a hybrid application that connects
                          users with exclusive discounts at restaurants, bars,
                          cafés, bakeries, and other food establishments. Unlike
                          platforms like PedidosYa or Rappi, which focus on
                          delivery, the goal of "Comé x menos" is to encourage
                          in-store dining or takeaway to take advantage of
                          discounts.
                        </p>

                        <p className="mb-4 font-bold">
                          The app consists of two platforms:
                        </p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            <strong>Web application:</strong> For business
                            owners and administrators to publish and manage
                            discounts.
                          </li>
                          <li>
                            <strong>Mobile application:</strong> For users to
                            browse discounts and generate QR codes to redeem
                            them in stores.
                          </li>
                          <li>
                            <strong>QR scanner:</strong> Business administrators
                            can validate discounts using an integrated scanner
                            in the mobile app.
                          </li>
                        </ul>

                        <p className="mb-4">
                          Both versions share the same backend, which I built
                          with Node.js and Express, ensuring real-time
                          synchronization. For the database, I used MongoDB
                          Atlas.
                        </p>

                        <p className="mb-4 font-bold">
                          🚀 Development challenges solved
                        </p>
                        <ul className="list-disc ml-5 mb-4">
                          <li>
                            ✅ <strong>Secure authentication:</strong>{" "}
                            Integrated Firebase Authentication with session
                            protection using JWT and cookies.
                          </li>
                          <li>
                            ✅ <strong>Real-time synchronization:</strong>{" "}
                            Ensured that discounts created on the web instantly
                            reflect in the mobile app.
                          </li>
                          <li>
                            ✅{" "}
                            <strong>Hybrid experience (web & mobile):</strong>{" "}
                            Designed an architecture that works seamlessly on
                            both platforms.
                          </li>
                          <li>
                            ✅ <strong>Image optimization:</strong> Implemented
                            a compression system to enhance performance without
                            losing quality.
                          </li>
                          <li>
                            ✅ <strong>QR discount validation:</strong>{" "}
                            Developed a scanning system to ensure discounts are
                            legitimate.
                          </li>
                          <li>
                            ✅ <strong>Efficient deployment:</strong> Optimized
                            cloud load times for better performance.
                            <button
                              onClick={toggleContent}
                              className={`ml-2 hover:underline ${
                                theme === "light"
                                  ? "text-blue-500"
                                  : "text-blue-400"
                              }`}
                              aria-label={
                                showFullContent
                                  ? "Show less content"
                                  : "Show more content"
                              }
                            >
                              {showFullContent
                                ? "Show less..."
                                : "Show more..."}
                            </button>
                          </li>
                        </ul>
                      </>
                    )}
                  </>
                )}
              </span>
            </div>

            {/* Sección de imágenes y videos */}
            <div className="px-[3%] pt-2 flex flex-row flex-wrap justify-evenly gap-5">
              {/* Imagen App Web */}
              <div className="md:w-[520px] flex flex-col items-center">
                <img
                  className="w-full md:w-[520px] rounded-md"
                  src={imagenComéxMenos}
                  alt="Comé x menos - Web App"
                />

                {showLanguage === "spanish" ? (
                  <p className="font-semibold text-center mt-2">
                    Imagen App Web
                  </p>
                ) : (
                  <p className="font-semibold text-center mt-2">
                    Web App Image
                  </p>
                )}
              </div>

              {/* Imagen App Móvil */}
              <div className="md:w-[200px] flex flex-col items-center">
                <img
                  className="w-36 md:w-[114.58px] rounded-lg border-4 border-gray-400"
                  src={imageComéxMenosMobileApp}
                  alt="Comé x menos - Mobile App"
                />

                {showLanguage === "spanish" ? (
                  <p className="font-semibold text-center mt-2">
                    Imagen App Móvil
                  </p>
                ) : (
                  <p className="font-semibold text-center mt-2">
                    Mobile App Image
                  </p>
                )}
              </div>

              {/* Video App Móvil */}
              <div className="w-full md:w-[260px] flex flex-col items-center justify-center gap-4 md:gap-5">
                <div>
                  <Button
                    onClick={handleOpenModal}
                    className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                    variant="contained"
                    color="primary"
                  >
                    {showLanguage === "spanish"
                      ? "Video App Web"
                      : "Web App Video"}
                  </Button>

                  {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                      <div className="relative w-[90%] max-w-[900px] py-5 md:py-0 lg:px-10 bg-black rounded-lg overflow-hidden">
                        <video
                          src={videoDemoComéxMenosWeb}
                          controls
                          autoPlay
                          className="w-full h-auto"
                        ></video>
                        <button
                          onClick={handleCloseModal}
                          className="absolute top-2 lg:top-3 right-2 lg:right-3 bg-red-500 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <Button
                    onClick={handleOpenMobileVideoModal}
                    className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                    variant="contained"
                    color="primary"
                  >
                    {showLanguage === "spanish"
                      ? "Video App Móvil"
                      : "Mobile App Project Video"}
                  </Button>

                  {showMobileVideo && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                      <div className="relative w-[90%] max-w-[900px] bg-black rounded-lg flex justify-center overflow-hidden">
                        <video
                          ref={videoRef}
                          src={videoComéxMenosMobile}
                          controls
                          autoPlay
                          className={`w-60 h-auto ${
                            isFullscreen ? "py-[6%] md 3xl:py-[13%]" : "py-10"
                          }`}
                        ></video>
                        <button
                          onClick={handleCloseMobileVideoModal}
                          className="absolute top-2 lg:top-3 right-2 lg:right-3 bg-red-500 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div>
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
                      {showLanguage === "spanish" ? "Ver App Web" : "View App"}
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`px-[3%] mt-4 ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              <p>
                {showLanguage === "spanish"
                  ? `Puedes entrar a la aplicación web creada en Next.js como usuario visitante, utilizando el email ficticio de prueba visituser@demo.com y la contraseña 12345678 (este usuario tiene el rol que tendría un empleado asociado a la cuenta de un negocio). Puedes crear, editar y eliminar un descuento.`
                  : `You can enter the web application created with Next.js as a guest user, using the test email visituser@demo.com and the password 12345678 (this user has the role of an employee associated with a business account). You can create, edit, and delete a discount.`}
              </p>
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
            <div className="px-[3%] mb-[2%] text-left">
              <span
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } mb-[3%]`}
              >
                <span className="mb-[-25px] font-bold">Meddyplus</span>
                <span className="ml-[5px]">
                  (
                  {showLanguage === "spanish" ? "Oct/Nov 2023" : "Oct/Nov 2023"}
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

            <div className="px-[3%] flex flex-wrap justify-evenly">
              <div className="md:w-[520px] py-[1%] px-[3%] md:py-0 md:flex md:justify-center">
                <img
                  className={`w-full py-[1%] lg:py-0 md:w-[520px] ml-[0.1%] border-[1px] ${
                    theme === "light" && "border-gray-400"
                  } rounded-md`}
                  src={imagenMeddyplus}
                  alt="Imágen Meddyplus"
                />
              </div>

              <div className="md:w-[260px] mt-2 flex flex-col items-center justify-center py-2 md:py-0 gap-4 md:gap-5">
                <div>
                  <a href="https://d3ml0dc5hiowr8.cloudfront.net/meddyplus.mp4">
                    <Button
                      className="w-[260px] text-lg text-center font-semibold py-1 rounded-md"
                      variant="contained"
                      color="primary"
                    >
                      {showLanguage === "spanish"
                        ? "Video presentación"
                        : "App Video"}
                    </Button>
                  </a>
                </div>

                <div>
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

        <div className={`pt-[1%] pb-[3%]`}>
          <div className="caja-luciani-automoviles">
            <div className="px-[3%] mb-[2%] text-left">
              <span
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } mb-[3%]`}
              >
                <span className="mb-[-25px] font-bold">NearByTour</span>
                <span className="ml-[5px]">
                  (
                  {showLanguage === "spanish" ? "Ago/Set 2023" : "Aug/Sep 2023"}
                  ):
                </span>
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

            <div className="px-[3%] flex flex-wrap justify-evenly">
              <div className="md:w-520px py-[1%] px-[3%] md:py-0 md:px-0 md:flex md:justify-center">
                <img
                  className={`w-full py-[1%] lg:py-0 md:w-[520px] ml-[0.1%] border-[1px] ${
                    theme === "light" && "border-gray-400"
                  } rounded-md`}
                  src={imagennearbytour}
                  alt="Imágen NearByTour"
                />
              </div>

              <div className="md:w-[260px] mt-2 flex flex-col items-center justify-center py-2 md:py-0 gap-4 md:gap-5">
                <div className={`${showLanguage === "english" ? "mt-8" : ""}`}>
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
                        : "App Video"}
                    </Button>
                  </a>
                </div>

                <div>
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

        {/* Dejo comentado momentaneamente este proyecto, por si decido volver a mostrarlo. */}
        {/* <div className={`py-[1%]`}>
          <div className="caja-luciani-automoviles">
            <div className="px-[3%] mb-[2%] text-left">
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

            <div className="px-[3%] flex flex-wrap justify-evenly">
              <div className="md:w-520px py-[1%]  px-[3%] md:py-0 md:px-0 md:flex md:justify-center">
                <img
                  className={`w-full py-[1%] lg:py-0 md:w-[520px] ml-[0.1%] border-[1px] ${
                    theme === "light" && "border-gray-300"
                  } rounded-md`}
                  src={imagenhernandezcabañas}
                  alt="imagen-hernandez-cabañas"
                />
              </div>
              <div className="md:w-[260px] mt-2 flex flex-col items-center justify-center">
                <div className="grid justify-center items-center">
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
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
