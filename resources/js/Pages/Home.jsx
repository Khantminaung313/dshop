import React, { createContext, useState } from 'react'
import Header from './header/Header'

export const ThemeContext = createContext();

const Home = ({categories}) => {
    const [theme, setTheme] = useState('light');
    console.log(categories);
  return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
            <Header title="home" categories={categories} /> 
            </div>
        </ThemeContext.Provider>
  )
}

export default Home