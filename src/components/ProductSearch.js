import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../App';


// const [searchTerm, setSearchTerm] = useState('');

const ProductSearch = ({ setSearchTerm }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const {selectedlangue} = useContext(LanguageContext);  
  

  return (
    <div className="mb-4">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={(selectedlangue ===  "Fr")?"Rechercher un produit...":"search for a product..." }
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;