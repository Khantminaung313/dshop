import React, { useContext } from "react";
import { ThemeContext } from "../Home";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({categories}) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        console.log(theme);
    };

    return (
        <div className="bg-d_white dark:bg-d_dark_blue py-4  text-d_black dark:text-d_white d_transition fixed top-0 left-0 w-full shadow shadow-d_gray dark:shadow-white">
            <header className="d_container flex justify-between items-center">
                <h1 className="text-2xl xl:text-3xl font-semibold lg:font-bold text-d_orange tracking-wider">
                    Dshop
                    <span className="text-d_gray text-xs tracking-normal">
                        What ever you want!
                    </span>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        {
                            categories.map(category => 
                                
                                    <li className="group cursor-pointer" key={category.id}>
                                        <span className="group-hover:text-d_light_blue">
                                            {category.name}
                                        </span>
                                    </li>
                                
                            )
                        }
                    </ul>
                </nav>
                <button
                    className={`border border-d_gray p-2 rounded-full ${
                        theme === "dark" ? "bg-d_dark_blue" : "bg-d_light_blue"
                    }`}
                    onClick={() => toggleTheme()}
                >
                    <FaMoon
                        className={`text-d_white w-5 h-5 ${
                            theme === "dark" && "hidden"
                        }`}
                    />
                    <FaSun
                        className={`text-d_white w-5 h-5 ${
                            theme === "light" && "hidden"
                        }`}
                    />
                </button>
            </header>
        </div>
    );
};

export default Header;
