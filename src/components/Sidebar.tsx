import AboutMe from "./AboutMe";
import Inicio from "./Home";
import MySkills from "./MySkills";
import Projects from "./Projects";

function Sidebar() {
    return (
      <>
        <div className='sidebar'> 
  
          <p onClick={()=>{let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none"}} className="close-sidebar">X
          </p>
  
          <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none"}} className="component-sidebar">
            <Inicio  /* id={"#home"} */ />
          </div>
  
          <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none"}} className="component-sidebar">
            <AboutMe /* id={"#about"} */ />
          </div>
  
          <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none"}} className="component-sidebar">
            <MySkills /* id={"#skills"} */ />
          </div>
  
          <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none"}} className="component-sidebar">
            <Projects /* id={"#projects"} */ />
          </div>
  
          <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none"}} className="component-sidebar">
            <ComponentNavbar titulo={"Contact"} id={"#contact"} />
          </div>
  
        </div> 
      </>
    )
  }
  
  export default Sidebar; 