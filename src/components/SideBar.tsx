import { Link } from "react-scroll";
import { Context } from "../context/Context";
import { useContext, useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function SideBar() {
  const { showLanguage, setShowLanguage, theme, setTheme, hidde, setHidde } =
    useContext(Context);

  const onClickHideSideBar = () => {
    setHidde("hidden");
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const changeToEnglish = () => {
    setShowLanguage("english");
  };

  const changeToSpanish = () => {
    setShowLanguage("spanish");
  };

  const changeToDark = () => {
    setTheme("dark");
  };

  const changeToLight = () => {
    setTheme("light");
  };

  const onClickItems = () => {
    setHidde("hidden");
  };

  return (
    <>
      <div
        className={`w-[50vw] h-screen ${
          theme === "light" ? "bg-gray-300" : "bg-gray-800"
        } py-[5%] pl-5 top-0 right-0 flex flex-col gap-10 z-10 ${hidde} fixed md:hidden overflow-y-auto`}
      >
        <p
          onClick={onClickHideSideBar}
          className={`text-xl ${
            theme === "light" ? "text-black" : "text-white"
          } font-semibold cursor-pointer`}
        >
          X
        </p>

        <div className="">
          <Link to="home" smooth={true} duration={500}>
            <p
              onClick={onClickItems}
              className={`w-[110px] ${
                theme === "light"
                  ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold"
                  : "text-white  hover:font-semibold hover:bg-white hover:text-black"
              } md:text-lg font-semibold px-2 rounded-md md:flex cursor-pointer`}
              id={"#home"}
            >
              {showLanguage === "spanish" ? "Inicio" : "Home"}
            </p>
          </Link>
        </div>

        <div className="">
          <Link to="about" smooth={true} duration={500} offset={-60}>
            <p
              onClick={onClickItems}
              className={`w-[110px] ${
                theme === "light"
                  ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold"
                  : "text-white  hover:font-semibold hover:bg-white hover:text-black"
              } md:text-lg font-semibold px-2 rounded-md md:flex cursor-pointer`}
              id={"#about"}
            >
              {showLanguage === "spanish" ? "Sobre mi" : "About me"}
            </p>
          </Link>
        </div>

        <div className="">
          <Link to="skills" smooth={true} duration={500} offset={-30}>
            <p
              onClick={onClickItems}
              className={`w-[110px] ${
                theme === "light"
                  ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold"
                  : "text-white  hover:font-semibold hover:bg-white hover:text-black"
              } md:text-lg font-semibold px-2 rounded-md md:flex cursor-pointer`}
              id={"#skills"}
            >
              {showLanguage === "spanish" ? "Habilidades" : "Skills"}
            </p>
          </Link>
        </div>

        <div className="">
          <Link to="projects" smooth={true} duration={500} offset={-60}>
            <p
              onClick={onClickItems}
              className={`w-[110px] ${
                theme === "light"
                  ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold"
                  : "text-white  hover:font-semibold hover:bg-white hover:text-black"
              } md:text-lg font-semibold px-2 rounded-md md:flex cursor-pointer`}
              id={"#projects"}
            >
              {showLanguage === "spanish" ? "Proyectos" : "Projects"}
            </p>
          </Link>
        </div>

        <div className="">
          <Link to="contact" smooth={true} duration={500} offset={-60}>
            <p
              onClick={onClickItems}
              className={`w-[110px] ${
                theme === "light"
                  ? "text-black hover:bg-[#030014] hover:text-white hover:font-semibold"
                  : "text-white  hover:font-semibold hover:bg-white hover:text-black"
              } md:text-lg font-semibold px-2 rounded-md md:flex cursor-pointer`}
              id={"#contact"}
            >
              {showLanguage === "spanish" ? "Contacto" : "Contact"}
            </p>
          </Link>
        </div>

        <div className="flex gap-1 md:text-lg">
          <span
            onClick={() => {changeToSpanish(); onClickItems()}}
            className={`font-semibold ${
              theme === "light" ? "text-black " : "text-white"
            } cursor-pointer px-1 border-${
              theme === "light" ? "black" : "white"
            } hover:bg-${
              theme === "light" ? "[#030014]" : "white"
            } hover:text-${
              theme === "light" ? "white" : "black" 
            } hover:font-semibold hover:border-white rounded-md ${
              showLanguage === "spanish" && `border-[1px]`
            } `}
          >
            {showLanguage === "spanish" ? "Esp" : "Spa"}
          </span>

          <span className={`text-${theme === "light" ? "black" : "white"}`}>
            /
          </span>

          <span
            onClick={() => {changeToEnglish(); onClickItems()}}
            className={`font-semibold ${
              theme === "light" ? "text-black" : "text-white"
            } cursor-pointer px-1 border-${
              theme === "light" ? "black" : "white"
            } hover:bg-${
              theme === "light" ? "[#030014]" : "white"
            } hover:text-${
              theme === "light" ? "white" : "black" 
            } hover:font-semibold hover:border-white rounded-md ${
              showLanguage === "english" && `border-[1px]`
            }`}
          >
            {showLanguage === "spanish" ? "Ing" : "Eng"}
          </span>
        </div>

        <div className="flex gap-1 md:text-lg">
          <div className="flex justify-center items-center">
            <span
              onClick={() => {changeToLight(); onClickItems()}}
              className={`font-semibold cursor-pointer py-1 px-2 
                      ${
                        theme === "light"
                          ? "border-[1px] border-black"
                          : "border-white"
                      } 
                      hover:bg-${theme === "light" ? "[#030014]" : "white"} 
                      hover:text-${
                        theme === "light" ? "white" : "black" 
                      } hover:border-white rounded-md 
                      ${theme === "light" ? "hover:text-black" : "text-white"}`}
            >
              {<MdOutlineLightMode />}
            </span>
          </div>

          <span className={`text-${theme === "light" ? "black" : "white"}`}>
            /
          </span>

          <div className="flex justify-center items-center">
            <span
              onClick={() => {changeToDark(); onClickItems()}}
              className={`font-semibold cursor-pointer py-1 px-2 
                      ${
                        theme === "light"
                          ? "border-[1px] border-black"
                          : "border-white"
                      } 
                      hover:bg-${theme === "light" ? "[#030014]" : "white"} 
                      hover:text-${theme === "light" ? "white" : "black"} 
                      hover:border-white rounded-md 
                      ${
                        theme === "dark" ? "border border-white text-white" : "border border-gray-300"
                      }`}
            >
              {<MdOutlineDarkMode />}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
