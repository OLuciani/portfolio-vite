import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MySkills from "./components/MySkills";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import { Context } from "../src/context/Context";
import { useContext, useEffect } from "react";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
  const { theme } = useContext(Context);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className={`w-full ${theme === "light" ? "bg-white" : "bg-[#030014]"} px-4`}>
      <NavBar />

      <SideBar />

      <Home />

      <AboutMe />

      <MySkills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
