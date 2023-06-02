import React, { useState } from 'react';
import data from '../data';
import Cards from './Cards';
import "../styles/body.css"
import {FaSearchPlus} from "react-icons/fa"

const Body = ({handleClick}) => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(data);
  
    const handleSearch = (event) => {
      const { value } = event.target;
      setSearchTerm(value);
  
      const results = data.filter((item) =>
        item.nom.toLowerCase().includes(value.toLowerCase())
      );
  
      setSearchResults(results);
    };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
          
          
        /><FaSearchPlus className='search'/>
        
      </div>
      
      <section>
        {searchResults.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </div>

  );
};

export default Body;
