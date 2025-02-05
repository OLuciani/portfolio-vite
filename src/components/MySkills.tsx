import imageReact from "../assets/react.png";
import imageCSS from "../assets/css.png";
import imageNext from "../assets/next.svg";
import imageTailwind from "../assets/tailwind.png";
import imageHTML from "../assets/html.png";
import imageTypescript from "../assets/ts.png";
import imageJavascript from "../assets/js.png";
import { TbBrandVite } from "react-icons/tb";
import imageNode from "../assets/node-js.png";
import imageExpress from "../assets/express.png";
import imageGithub from "../assets/github-142-svgrepo-com.svg";
import imageMongoDb from "../assets/mongodb.png";
import imageMySql from "../assets/mysql.png";
import imageDocker from "../assets/docker.webp";
import imagenGit from "../assets/git.png";
import { SiPostman } from "react-icons/si";
import { Context } from '../context/Context';
import { useContext } from "react";

const MySkills = () => {
    const { showLanguage, theme } = useContext(Context);

  return (
    <div id="skills" className='w-full md:px-16 pt-2'>
        <h2 className='text-center text-[salmon] text-xl md:text-2xl font-semibold my-6'>{showLanguage === "spanish" ? "Habilidades" : "Skills"}</h2>

        <div className='w-full grid justify-center mb-10 md:text-lg'>
            <div className='md:w-[90vw]'>
                <p className={`${theme === "light" ? "text-black" : "text-white"} text-left`}>{showLanguage === "spanish" ? "Estas son algunas de las tecnologías y herramientas que utilizo: React js, Javascript, Typescipt, HTML5, Next js, CSS, Tailwind css, Vite js, Node js, Express js, React Native (Expo), MySql, Mongo Db, Git, Github, Postman, Docker, Creación de APIS, Patrón de Arquitectura MVC, OPP, Scrum, Visual Studio Code, Java, Inglés e Italiano." : "These are some of the skills I use: React.js, JavaScript, TypeScript, HTML5, Next.js, CSS, Tailwind CSS, Vite.js, Node.js, Express.js, React Native (Expo), MySQL, MongoDB, Git, GitHub, Postman, Docker, API Creation, MVC Architecture, OOP, Scrum, Visual Studio Code, Java, English, and Italian."} </p>
            </div>
        </div>

        <div className={`overflow-hidden flex flex-row flex-wrap justify-evenly gap-10`} >
            <div className={`w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] grid justify-center items-center habilidades-1 mb-5 ${theme === "light" ? "bg-gray-800 rounded-full" : null}`}>
                <div className="flex rotate-animation">
                    {/* Contenedor del círculo */}
                    <div className="relative">
                        {/* Línea diagonal izquierda-arriba a derecha-abajo */}
                        <div className={`bg-white absolute w-[340px] h-[1px] transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                        <img
                            src={imageReact}
                            alt="Image React"
                            className="w-[38.25px] absolute right-[42.5px] top-[25.5px] rotate-animation"
                        />
                        <img
                            src={imageNext}
                            alt="Image Next"
                            className={`w-[38.25px] absolute left-[42.5px] top-[42.5px] rotate-animation`}
                        />
                        </div>

                        <div className={`absolute w-[340px] h-[1px] bg-white -translate-x-1/4 translate-y-[85px]`}>
                        <img
                            src={imageTailwind}
                            alt="Image Tailwind"
                            className="w-[38.25px] absolute right-[42.5px] top-[25.5px] rotate-animation"
                        />
                        <img
                            src={imageHTML}
                            alt="Image HTML"
                            className="w-[34px] absolute left-[42.5px] top-[25.5px] rotate-animation"
                        />
                        </div>

                        {/* Línea diagonal izquierda-abajo a derecha-arriba */}
                        <div className={`absolute w-[340px] h-[1px] bg-white transform -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                        <img
                            src={imageTypescript}
                            alt="Image Typescript"
                            className="w-[30px] absolute right-[42.5px] top-[31.5px] rotate-animation"
                        />
                        <img
                            src={imageJavascript}
                            alt="Image Javascript"
                            className="w-[30px] absolute left-[42.5px] top-[31.5px] rounded-md rotate-animation"
                        />
                        </div>
                        <div className={`absolute w-[340px] h-[1px] bg-white -rotate-90 -translate-x-1/4 translate-y-[85px]`}>
                        <span>
                            <TbBrandVite
                            className="w-[34px] absolute right-[42.5px] top-[25.5px] text-gray-300 text-5xl rotate-animation"
                            />
                        </span>
                        </div>

                        <img
                        src={imageCSS}
                        alt="Image CSS"
                        className="w-[38.25px] absolute left-[20.4px] top-[-42.5px] -rotate-12 rotate-animation"
                        />

                        {/* Círculos con borde */}
                        <div className={`w-[170px] h-[170px] border-[1px] border-white rounded-full grid justify-center items-center`}>
                        <div className={`w-[102px] h-[102px] border-[1px] border-white rounded-full`}></div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className={`w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] grid justify-center items-center habilidades-2 mb-5 ${theme === "light" ? "bg-gray-800 rounded-full" : null}`}>
                <div className="flex rotate-animation">
                    {/* Contenedor del círculo */}
                    <div className="relative">
                        {/* Línea diagonal izquierda-arriba a derecha-abajo */}
                        <div className={`absolute w-[340px] h-[1px] bg-white transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                            <img 
                                src={imageNode}
                                alt="Image Node"
                                className="w-[38.25px] absolute right-[42.5px] top-[25.5px] rotate-animation"
                            />
                            <img
                                src={imageExpress}
                                alt="Image Express"
                                className={`w-[38.25px] absolute left-[42.5px] top-[25.5px] rotate-animation`}
                            />
                        </div>

                        <div className={`absolute w-[340px] h-[1px] bg-white -translate-x-1/4 translate-y-[85px]`}>
                        <img
                            src={imageGithub}
                            alt="Image Github"
                            className={`w-[38.25px] absolute ${theme === "light" ? "bg-black rounded-md" : null} right-[42.5px] top-[25.5px] rotate-animation`}
                        />
                        <img
                            src={imageMongoDb}
                            alt="Image MongoDb"
                            className="w-[27px] absolute left-[42.5px] top-[18.5px] rotate-animation"
                        />
                        </div>

                        {/* Línea diagonal izquierda-abajo a derecha-arriba */}
                        <div className={`absolute w-[340px] h-[1px] bg-white transform -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                        <img
                            src={imageMySql}
                            alt="Image MySql"
                            className="w-[34px] h-[34px] p-1 rounded-md bg-white absolute right-[42.5px] top-[30px] rotate-animation"
                        />
                        <img
                            src={imageDocker}
                            alt="Image Docker"
                            className="w-[36.45px] h-[25.5px] absolute left-[42.5px] top-[33.5px] rounded-md rotate-animation"
                        />
                        </div>
                        <div className={`absolute w-[340px] h-[1px] bg-white -rotate-90 -translate-x-1/4 translate-y-[85px]`}>
                        <img src={imagenGit}
                            alt="Image Git"
                            className={`w-[34px] border rounded-sm bg-white absolute right-[42.5px] top-[25.5px] rotate-animation`}
                            /> 
                        </div>

                        <span><SiPostman className={`w-[34px] absolute left-[20.4px] top-[-42.5px] text-white text-5xl rotate-animation`} /></span>

                        {/* Círculos con borde */}
                        <div className={`w-[170px] h-[170px] border-[1px] border-white rounded-full grid justify-center items-center`}>
                        <div className={`w-[102px] h-[102px] border-[1px] border-white rounded-full`}></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] grid justify-center items-center habilidades-3 mb-5 ${theme === "light" ? "bg-gray-800 rounded-full" : null}`}>
                <div className="flex rotate-animation">
                    {/* Contenedor del círculo */}
                    <div className="relative">
                        {/* Línea diagonal izquierda-arriba a derecha-abajo */}
                        <div className={`absolute w-[340px] h-[1px] bg-white transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                            <div className='w-[50px] absolute right-[42.5px] top-[30.5px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-[#c0c031] text-center'>Inglés</p></div>

                            <div className='w-[50px] absolute left-[42.5px] top-[30px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-[#ffa07a] text-center'>Scrum</p></div>
                        </div>

                        <div className={`absolute w-[340px] h-[1px] bg-white -translate-x-1/4 translate-y-[85px]`}>
                            <div className='w-[50px] absolute right-[42.5px] top-[24px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-center text-[#90ee90]'>Pat Arq MVC</p></div>

                            <div className='w-[50px] absolute left-[42.5px] top-[30px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-[#ee82ee] text-center'>OPP</p></div>
                        </div>

                        {/* Línea diagonal izquierda-abajo a derecha-arriba */}
                        <div className={`absolute w-[340px] h-[1px] bg-white transform -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                            <div className='w-[50px] absolute right-[42.5px] top-[23px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-blue-300 text-center'>Creación de APIS</p></div>

                                <div className='w-[50px] absolute left-[42.5px] top-[24px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-[#cdb4b4] text-center'>V. S. Code</p></div>
                        </div>

                        <div className={`absolute w-[340px] h-[1px] bg-white -rotate-90 -translate-x-1/4 translate-y-[85px]`}>
                            <div className='w-[50px] absolute right-[42.5px] top-[32px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-[orange] text-center'>Italiano</p></div>
                        </div>

                        <div className='w-[50px] absolute left-[20.5px] top-[-30px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-center text-[#ceb29d]'>Java</p></div>

                        {/* Círculos con borde */}
                        <div className={`w-[170px] h-[170px] border-[1px] border-white rounded-full grid justify-center items-center`}>
                        <div className={`w-[102px] h-[102px] border-[1px] border-white rounded-full`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

  )
}

export default MySkills;