import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import useDebounce from './hooks/useDebounce';

// TODO: Exercice 2.1 - Créer le LanguageContext

export const ThemeContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  const [selectedlangue, setSelectedlangue] = useState("En");
  
  const handleChange = (event) => {
    setSelectedlangue(event.target.value);
  };


  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>

      <LanguageContext.Provider value={{ selectedlangue, setSelectedlangue }}>
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <header className="my-4">
          <h1> {selectedlangue} </h1>
          <h1 className="text-center"> {(selectedlangue === "Fr") ? " Catalogue de Produits" : "Product catalogue "}</h1>
          <div className="d-flex justify-content-end gap-2">
            <ThemeToggle />
            <select 
            onChange={handleChange}
            >
            <option value="En">english</option>
            <option value="Fr">frensh</option>
            </select>
          </div>
        </header>
        <main>
          <ProductSearch setSearchTerm={setSearchTerm}  />
          <ProductList filtringTherm={debouncedSearchTerm} />
        </main>
      </div>

      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App
