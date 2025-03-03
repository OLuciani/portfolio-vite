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
        <h2 className='text-center text-[#f06556] text-xl md:text-2xl font-semibold my-6'>{showLanguage === "spanish" ? "Habilidades" : "Skills"}</h2>

        <div className={`w-full grid justify-center md:text-lg mb-4 md:mb-6`}>
            <div className='md:w-[90vw]'>
                <p className={`${theme === "light" ? "text-black" : "text-white"} text-left`}>{showLanguage === "spanish" ? "Estas son algunas de las tecnologías y herramientas que utilizo: React js, Javascript, Typescipt, HTML5, Next js, CSS, Tailwind css, Vite js, Node js, Express js, React Native (Expo), MySql, Mongo Db, Git, Github, Postman, Docker, Creación de APIS, Patrón de Arquitectura MVC, OPP, Scrum, Visual Studio Code, Java, Inglés e Italiano." : "These are some of the skills I use: React.js, JavaScript, TypeScript, HTML5, Next.js, CSS, Tailwind CSS, Vite.js, Node.js, Express.js, React Native (Expo), MySQL, MongoDB, Git, GitHub, Postman, Docker, API Creation, MVC Architecture, OOP, Scrum, Visual Studio Code, Java, English, and Italian."} </p>
            </div>
        </div>

        <div className={`overflow-hidden flex flex-row flex-wrap justify-evenly pt-5 md:pt-0 ${theme === "light" ? "gap-10" : "gap-10" }`} >
            <div className={`w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] grid justify-center items-center habilidades-1 mb-5 `}>
                <div className="flex rotate-animation">
                    {/* Contenedor del círculo */}
                    <div className="relative">
                        {/* Línea diagonal izquierda-arriba a derecha-abajo */}
                        <div className={`${theme === "light" ? "bg-gray-600" : "bg-white"} absolute w-[340px] h-[1px] transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>

                        <div className={`w-[50px] h-[50px] absolute right-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}>
                        <img
                            src={imageReact}
                            alt="Image React"
                            className="w-[38.25px]"
                        />
                        </div>    

                        <div className={`w-[50px] h-[50px] absolute left-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}>
                            <img
                                src={imageNext}
                                alt="Image Next"
                                className={`w-[38.25px] bg-black rounded-md`}
                            />
                        </div>
                        </div>

                        <div className={`${theme === "light" ? "bg-gray-600" : "bg-white"} absolute w-[340px] h-[1px] -translate-x-1/4 translate-y-[85px]`}>

                        <div className={`w-[50px] h-[50px] absolute right-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}>
                            <img
                                src={imageTailwind}
                                alt="Image Tailwind"
                                className="w-[38.25px]"
                            />
                        </div>

                        <div className={`w-[50px] h-[50px] absolute left-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}>
                            <img
                                src={imageHTML}
                                alt="Image HTML"
                                className="w-[34px]"
                            />
                        </div>
                        </div>

                        {/* Línea diagonal izquierda-abajo a derecha-arriba */}
                        <div className={`${theme === "light" ? "bg-gray-600" : "bg-white"} absolute w-[340px] h-[1px] transform -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>

                        <div className={`w-[50px] h-[50px] absolute right-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}>
                            <img
                                src={imageTypescript}
                                alt="Image Typescript"
                                className={`${theme === "light" ? "w-[30px] rounded-sm" : "w-[30px] rounded-md"}`}
                            />
                        </div>

                        <div className={`w-[50px] h-[50px] absolute left-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}>
                            <img
                                src={imageJavascript}
                                alt="Image Javascript"
                                className={`${theme === "light" ? "w-[30px] rounded-sm" : "w-[30px] rounded-md"}`}
                            />
                        </div>

                        </div>
                        <div className={`${theme === "light" ? "bg-gray-600" : "bg-white"} absolute w-[340px] h-[1px] -rotate-90 -translate-x-1/4 translate-y-[85px]`}>
                        
                        <div className={`w-[50px] h-[50px] absolute right-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}>
                            <span>
                                <TbBrandVite
                                className="w-[34px] text-gray-300 text-5xl "
                                />
                            </span>
                        </div>
                        </div>
                        <div className={`w-[50px] h-[50px] bg-black rounded-md absolute left-[11.9px] top-[-62px] rotate-animation p-[5px] flex justify-center items-center`}>
                            <img
                            src={imageCSS}
                            alt="Image CSS"
                            className="w-[38.25px]"
                            />
                        </div>


                        {/* Círculos con borde */}
                        <div className={`${theme === "light" ? "border-gray-600" : "border-white"} w-[170px] h-[170px] border-[1px] rounded-full grid justify-center items-center`}>
                        <div className={`${theme === "light" ? "border-gray-600" : "border-white"} w-[102px] h-[102px] border-[1px] rounded-full`}></div>
                        </div>

                    </div>
                </div>
            </div>

            
            <div className={`w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] grid justify-center items-center habilidades-2 mb-5`}>
                <div className="flex rotate-animation">
                    {/* Contenedor del círculo */}
                    <div className="relative">
                        {/* Línea diagonal izquierda-arriba a derecha-abajo */}
                        <div className={`${theme === "light" ? "bg-gray-600" : "bg-white"} absolute w-[340px] h-[1px] transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>

                            <div className={`w-[50px] h-[50px] absolute right-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}
                            >
                                <img 
                                    src={imageNode}
                                    alt="Image Node"
                                    className="w-[38.25px]"
                                />
                            </div>

                            <div className={`w-[50px] h-[50px] absolute left-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}
                            >
                                <img
                                    src={imageExpress}
                                    alt="Image Express"
                                    className={`w-[38.25px]`}
                                />
                            </div>
                        </div>

                        <div className={`${theme === "light" ? "bg-gray-600" : "bg-white"} absolute w-[340px] h-[1px] -translate-x-1/4 translate-y-[85px]`}>

                            <div className={`w-[50px] h-[50px] absolute right-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}
                                >
                                <img
                                    src={imageGithub}
                                    alt="Image Github"
                                    className={`w-[38.25px] ${theme === "light" ? "bg-black rounded-md" : null}`}
                                />
                            </div>

                            <div className={`w-[50px] h-[50px] absolute left-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}
                                >
                                <img
                                    src={imageMongoDb}
                                    alt="Image MongoDb"
                                    className={`${theme === "light" ? "w-[17px]" : "w-[21px]"}`}
                                />
                            </div>
                        </div>

                        {/* Línea diagonal izquierda-abajo a derecha-arriba */}
                        <div className={`${theme === "light" ? "bg-gray-600" : "bg-white"} absolute w-[340px] h-[1px] transform -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                            <div className={`w-[50px] h-[50px] absolute right-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}
                            >
                                <img
                                    src={imageMySql}
                                    alt="Image MySql"
                                    className={`${theme === "light" ? "w-[30px] h-[30px]" : "w-[34px] h-[34px]"} p-1 rounded-md bg-white`}
                                />
                            </div>

                            <div className={`w-[50px] h-[50px] absolute left-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}
                            >
                                <img
                                    src={imageDocker}
                                    alt="Image Docker"
                                    className={`${theme === "light" ? "w-[30px] h-[30px]" : "w-[36.45px] h-[25.5px]"} `}
                                />
                            </div>
                        </div>
                        <div className={`${theme === "light" ? "bg-gray-600" : "bg-white"} absolute w-[340px] h-[1px] -rotate-90 -translate-x-1/4 translate-y-[85px]`}>
                            <div className={`w-[50px] h-[50px] absolute right-[25.25px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}
                            >
                                <img src={imagenGit}
                                    alt="Image Git"
                                    className={`w-[34px] border rounded-sm bg-white`}
                                />
                            </div>    

                        </div>

                        
                        
                        <span className={`w-[50px] h-[50px] bg-black rounded-md absolute left-[11.9px] top-[-62px] text-white text-[35px] flex justify-center items-center`}><SiPostman /></span>

                        
                        <div className={`w-[170px] h-[170px] border-[1px] ${theme === "light" ? "border-gray-600" : "border-white"} rounded-full grid justify-center items-center`}>
                        <div className={`w-[102px] h-[102px] border-[1px] ${theme === "light" ? "border-gray-600" : "border-white"} rounded-full`}></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] grid justify-center items-center habilidades-3 mb-5`}>
                <div className="flex rotate-animation">
                    {/* Contenedor del círculo */}
                    <div className="relative">
                        {/* Línea diagonal izquierda-arriba a derecha-abajo */}
                        <div className={`absolute w-[340px] h-[1px] ${theme === "light" ? "bg-gray-600" : "bg-white"} transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                        {/* <div className={`w-[40.25px] h-[40.25px] absolute right-[42.5px] top-[25.5px] rotate-animation bg-black p-[5px] rounded-md flex justify-center items-center`}
                        > */}

                            <div className='w-[50px] h-[50px] bg-black rounded-md absolute right-[25.25px] top-[25.5px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-[#c0c031] text-center'>Inglés</p></div>

                            <div className='w-[50px] h-[50px] bg-black rounded-md absolute left-[25.25px] top-[25.5px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-[#ffa07a] text-center'>Scrum</p></div>
                        </div>

                        <div className={`absolute w-[340px] h-[1px] ${theme === "light" ? "bg-gray-600" : "bg-white"} -translate-x-1/4 translate-y-[85px]`}>
                            <div className='w-[50px] h-[50px] bg-black rounded-md absolute right-[25.25px] top-[25.5px] grid justify-center items-center rotate-animation'><p className={`${theme === "light" ? "text-[11px]" : "text-[14px]"} text-center text-[#90ee90]`}>Pat Arq MVC</p></div>

                            <div className='w-[50px] h-[50px] bg-black rounded-md absolute left-[25.25px] top-[25.5px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-[#ee82ee] text-center'>OPP</p></div>
                        </div>

                        {/* Línea diagonal izquierda-abajo a derecha-arriba */}
                        <div className={`absolute w-[340px] h-[1px] ${theme === "light" ? "bg-gray-600" : "bg-white"} transform -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                            <div className='w-[50px] h-[50px] bg-black rounded-md absolute right-[25.25px] top-[25.5px] grid justify-center items-center rotate-animation'><p className={`${theme === "light" ? "text-[11px]" : "text-[14px]"} text-blue-300 text-center`}>Creación de APIS</p></div>

                                <div className='w-[50px] h-[50px] bg-black rounded-md absolute left-[25.25px] top-[25.5px] grid justify-center items-center rotate-animation'><p className={`${theme === "light" ? "text-[11px]" : "text-[14px]"} text-[#cdb4b4] text-center`}>V. S.<p className={`${theme === "light" ? "text-[11px]" : "text-[14px]"} text-[#cdb4b4] text-center`}>Code</p></p></div>
                        </div>

                        <div className={`absolute w-[340px] h-[1px] ${theme === "light" ? "bg-gray-600" : "bg-white"} -rotate-90 -translate-x-1/4 translate-y-[85px]`}>
                            <div className={`w-[50px] h-[50px] bg-black rounded-md absolute right-[25.25px] top-[25.5px] grid justify-center items-center rotate-animation`}><p className={`${theme === "light" ? "text-[11px]" : "text-[14px]"} text-[orange] text-center`}>Italiano</p></div>
                        </div>

                        <div className='w-[50px] h-[50px] bg-black rounded-md absolute left-[11.9px] top-[-62px] grid justify-center items-center rotate-animation'><p className='text-[14px] text-center text-[#ceb29d]'>Java</p></div>

                        {/* Círculos con borde */}
                        <div className={`w-[170px] h-[170px] border-[1px] ${theme === "light" ? "border-gray-600" : "border-white"} rounded-full grid justify-center items-center`}>
                        <div className={`w-[102px] h-[102px] border-[1px] ${theme === "light" ? "border-gray-600" : "border-white"} rounded-full`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

  )
}

export default MySkills;