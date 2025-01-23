import { Link } from 'react-scroll';
import { TiThMenu } from "react-icons/ti"; 
import { Context } from '../context/Context';
import { useContext, useEffect } from "react";
//import { Link as ScrollLink } from 'react-scroll';
//import { animateScroll as scroll } from 'react-scroll';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function NavBar() {
  const { showLanguage, setShowLanguage, theme, setTheme, setHidde } = useContext(Context);
  
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const changeToEnglish = () => {
    setShowLanguage("english");
  }

  const changeToSpanish = () => {
    setShowLanguage("spanish");
  }

  const changeToDark = () => {
    setTheme("dark");
  }

  const changeToLight = () => {
    setTheme("light");
  }

  const onClickShowSideBar = () => {
    setHidde("");
  }

 
 /*  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }; */

  //console.log(showLanguage);
  //console.log(theme);

  return (
    <div className="flex justify-center">
      <nav className={`${theme === "light" ? "bg-white" : "bg-[#030014] text-white"} py-3 flex justify-between md:justify-evenly items-center fixed top-0 w-full z-10`}>
        <div>
          <Link to="home" smooth={true} duration={500}>
            <p className={`${theme === "light" ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold" : "text-white hover:font-semibold hover:bg-white hover:text-black"} text-2xl font-semibold px-2 rounded-md cursor-pointer`}>
              OL
            </p>
          </Link>
        </div>

        <div className="">
          <Link to="home" smooth={true} duration={500}>
            <p
              className={`${theme === "light" ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold" : "text-white  hover:font-semibold hover:bg-white hover:text-black"} md:text-lg lg:text-xl font-semibold px-2 rounded-md hidden md:flex cursor-pointer`}
              id={"#home"}
            >
              {
                showLanguage === "spanish" ? "Inicio" : "Home"
              }
            </p>
          </Link>
        </div>

        <div className="">
        <Link to="about" smooth={true} duration={500} offset={-60}>
            <p
              className={`${theme === "light" ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold" : "text-white  hover:font-semibold hover:bg-white hover:text-black"} md:text-lg lg:text-xl font-semibold px-2 rounded-md hidden md:flex cursor-pointer`}
              id={"#about"}
            >
              {
                showLanguage === "spanish" ? "Sobre mi" : "About me"
              }
            </p>
          </Link>
        </div>

        <div className="">
        <Link to="skills" smooth={true} duration={500} offset={-30}>
            <p
              className={`${theme === "light" ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold" : "text-white  hover:font-semibold hover:bg-white hover:text-black"} md:text-lg lg:text-xl font-semibold px-2 rounded-md hidden md:flex cursor-pointer`}
              id={"#skills"}
            >
              {
                showLanguage === "spanish" ? "Habilidades" : "Skills"
              }
            </p>
            </Link>
        </div>

        <div className="">
          <Link to="projects" smooth={true} duration={500} offset={-60}>
            <p
              className={`${theme === "light" ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold" : "text-white  hover:font-semibold hover:bg-white hover:text-black"} md:text-lg lg:text-xl font-semibold px-2 rounded-md hidden md:flex cursor-pointer`}
              id={"#projects"}
            >
              {
                showLanguage === "spanish" ? "Proyectos" : "Projects"
              }
            </p>
          </Link>
        </div>

        <div className="">
          <Link to="contact" smooth={true} duration={500} offset={-60}>
            <p
              className={`${theme === "light" ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold" : "text-white  hover:font-semibold hover:bg-white hover:text-black"} md:text-lg lg:text-xl font-semibold px-2 rounded-md hidden md:flex cursor-pointer`}
              id={"#contact"}
            >
              {
                showLanguage === "spanish" ? "Contacto" : "Contact"
              }
            </p>
          </Link>
        </div>

        <div className={`hidden md:block`}>
          <span onClick={ changeToSpanish } className={`font-semibold ${theme === "light" ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold cursor-pointer" : "bg-[#030014] text-white hover:font-semibold px-1 hover:bg-white hover:text-black cursor-pointer"} md:text-lg lg:text-xl ${showLanguage === "spanish" ? `border-[1px] ${theme === "light" ? "border-black" : "border-white"} font-semibold px-2 rounded-md mr-1` : "cursor-pointer px-1 hover:rounded-md"}`}>{showLanguage === "spanish" ? "Esp" : "Spa"}</span>
          <span className=' md:text-lg px-1 font-semibold'>/</span>
          <span onClick={ changeToEnglish } className={`font-semibold ${theme === "light" ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold cursor-pointer" : "bg-[#030014] text-white hover:font-semibold px-1 hover:bg-white hover:text-black cursor-pointer"} md:text-lg lg:text-xl ${showLanguage === "english" ? `border-[1px] ${theme === "light" ? "border-black" : "border-white"} font-semibold px-2 rounded-md mr-1` : "cursor-pointer px-1 hover:rounded-md"}`}>{showLanguage === "english" ? "Eng" : "Ing"}</span>        
        </div>

        <div className={`hidden md:block`}>
          <div className='flex justify-center items-center'>
            <span onClick={ changeToLight } className={`md:py-[3px] md:px-2 font-semibold md:text-lg lg:text-xl ${theme === "light" ? "border-[1px] border-black font-semibold px-2 rounded-md mr-1 cursor-pointer hover:bg-[#030014] hover:text-white" : "cursor-pointer bg-[#030014] px-1 hover:rounded-md hover:bg-white hover:text-black"}`}>{<MdOutlineLightMode />}</span>
            <span className='md:text-lg px-2 font-semibold'>/</span>
            {/* <span onClick={ changeToDark } className={`md:py-[3px] md:text-lg ${theme === "light" ? "border-[1px] border-white font-semibold px-1 rounded-md mr-1 cursor-pointer hover:bg-[#030014] hover:text-white" : "cursor-pointer bg-[#030014] border border-white px-2 rounded-md hover:px- hover:rounded-md hover:bg-white hover:text-black"}`}>{<MdOutlineDarkMode />}</span> */}   
            <span onClick={ changeToDark } className={`md:py-[3px] md:px-2 font-semibold md:text-lg lg:text-xl ${theme === "light" ? "font-semibold px-2 rounded-md mr-1 cursor-pointer hover:bg-[#030014] hover:text-white" : "cursor-pointer bg-[#030014] px-1 hover:rounded-md hover:bg-white hover:text-black border-[1px] border-white rounded-md"}`}>{<MdOutlineDarkMode />}</span>     
          </div>
        </div>

        {/* <ScrollLink to="home" smooth={true} duration={500}> */}
        <div className="px-2 rounded-md hover:bg-white hover:text-black hover:font-semibold md:hidden">
          <span>
            <TiThMenu onClick={() => {onClickShowSideBar(); /* scrollToTop(); */}} className="text-[24px] cursor-pointer" />
          </span>
        </div>
        {/* </ScrollLink> */}
      </nav> 
    </div>
  );
}

export default NavBar;
