import { useContext } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ThemeContext } from "../Home";

const TopHeader = () => {

  const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };


  return (
    <div className="hidden lg:block d_fluid border-b border-d_gray/30">
      <div className="d_container py-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <FaFacebook className="w-6 h-6 text-blue-700 hover:text-blue-500 cursor-pointer"/>
            <FaInstagram className="w-6 h-6 text-orange-500 hover:text-orange-300 cursor-pointer"/>
            <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600 cursor-pointer"/>
          </div>
          <div>

            <button className="text-d_dark_blue dark:text-d_white w-20 h-8 rounded-full border shadow-inner shadow-d_dark_blue d-transition flex justify-between items-center px-2 relative overflow-hidden" onClick={toggleTheme}>
              <div className={`absolute top-[50%] translate-y-[-50%] w-[60%] h-[120%] rounded-full border bg-d_light_blue active:scale-75 dark:bg-d_dark_blue d_transition ${theme === 'light' ? 'left-0' : 'left-[40%]'}`}></div>
              <BsMoonStars className="text-lg"/>
              <BsSun className="text-lg"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader