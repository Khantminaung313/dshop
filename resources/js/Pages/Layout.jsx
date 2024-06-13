import Footer from "@/Components/Footer";
import { createContext, useState } from "react";
import HeaderSection from "./header/HeaderSection";

export const ThemeContext = createContext();


const Layout = ({ children}) => {
  const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div
                className={`${
                    theme === "dark" ? "dark" : "light"
                } dark:bg-d_dark_blue min-h-screen d_transition relative overflow-x-hidden`}
            >
                <HeaderSection />
                <div>
                    {children}
                </div>
                <Footer />
            </div>

        </ThemeContext.Provider>
    );
};

export default Layout;
