import { createContext, useState } from 'react';
import HeaderSection from './header/HeaderSection';

export const ThemeContext = createContext();

const Home = ({genderList, categories}) => {
    const [theme, setTheme] = useState('light');
  return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
              <HeaderSection title="home" genderList={genderList} categories={categories} />
            </div>
        </ThemeContext.Provider>
  )
}

export default Home