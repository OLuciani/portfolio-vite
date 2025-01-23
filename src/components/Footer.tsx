import { Context } from '../context/Context';
import { useContext } from "react";

function Footer() {
  const { showLanguage, theme } = useContext(Context);

    return (
      <>
        <div className="w-full h-14 grid justify-center items-center">
          <p className={`font-bold ${theme === "light" ? "text-black" : "text-white"} md:text-lg`}>{showLanguage === "spanish" ? "© Derechos Reservados 2025" : "© All Rights Reserved 2025"}</p>
        </div>
      </>
    )
  }
  
  export default Footer;