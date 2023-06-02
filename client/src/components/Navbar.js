import React from 'react';
import logo from "../png/logo.png"
import "./body.css"
const Navbar = () => {
  return (
    <nav>
        
        <div>
          <img className="logo" src={logo} alt="logo" width={300} />
        </div>

        <hr />
      
    </nav>
  )
}

export default Navbar